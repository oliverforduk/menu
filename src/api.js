const APIURL = 'https://dev.menu.ninja/api/menu/156?key=8j5vfe%24*pfb**rzt&pretty=1';

export async function getMenu() {
  return fetch(APIURL)
    .then(res => {
      handleError(res);
      return res.json();
    });
}

function handleError(res) {
  if(!res.ok) {
    if(res.status >=400 && res.status < 500) {
      return res.json().then(data => {
        let err = {errorMessage: data.message};
        throw err;
      });
    } else {
      let err = {errorMessage: 'Please try again, server problems.'};
      throw err;
    }
  }
}