class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  // Обработка ответа сервера
  _getStatus(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error! : ${res.status}`);
    }
  }

  getServerData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()])
  }

  // Обновить фото пользователя
  updatePhoto(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._getStatus);
  }

  // Запросить информацию о пользователе
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(this._getStatus);
  }

  // Обновить информацию о пользователе
  editUserDesc(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._getStatus);
  }

  // Обновить аватар
  editUserAvatar(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._getStatus);
  }

  // Запросить карточки 
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._getStatus);
  }

  // Загрузить карточку на сервер
  addCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._getStatus);
  }

  // Удалить карточку
  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._getStatus);
  }

  // Поставить лайк
  putLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._getStatus);
  }

  //  Удалить лайк
  removeLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._getStatus);
  }
}

export const api = new Api ({
  url: 'https://mesto.nomoreparties.co/v1/cohort-23',
  headers: {
    authorization: '59fccf9e-6799-435b-80d6-745d3115e9a3',
    'Content-Type': 'application/json'
  }
});