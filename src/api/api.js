import React, { Component } from 'react';
import { Dimensions, Platform, Alert } from 'react-native';

export const apiUrl = 'https://jsonplaceholder.typicode.com';


function processResponse(response) {
  const statusCode = response.status;
  const data = response.json();
  return Promise.all([statusCode, data]).then(res => ({
    statusCode: res[0],
    data: res[1],
  }));
}

function callApi(
  endpoint,
  token,
  options = { method: 'get' },
  apiUrl = 'https://jsonplaceholder.typicode.com',
) {
  const url = `${apiUrl}/${endpoint}`;

  console.log('\n data recived inline:' + url);

  return fetch(url, {
    ...options,
    headers: {
      Authorization: 'Bearer ' + `${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      language: 'fa',
    },
  })
    .then(processResponse)
    .then(res => {
      const { statusCode, data } = res;
      //   console.log('statusCode', statusCode);
      return res;
    })
    .catch(error => {
      console.log('\n \n data for exeption:' + JSON.stringify(error));
      return {
        statusCode: 400,
        name: 'network error',
        description: JSON.stringify(error),
      };
    });
}

//#region  start webapi 

export function GetLastDataService(token) {
  return callApi(`users`, token)
}


//#endregion
