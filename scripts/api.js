class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }
    getAllTasks() {
        return fetch(this._url, {
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject("Произошла ошибка");
        });
    }

    addTask(data) {
        return fetch(this._url, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(data),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject("Произошла ошибка");
        });
    }

    deleteTask(id) {
        return fetch(`${this._url}${id}`, {
            method: "DELETE",
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
    
            return Promise.reject("Произошла ошибка");
        });
    }
}