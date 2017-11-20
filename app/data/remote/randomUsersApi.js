
export default () => {
    const url = `https://randomuser.me/api/?seed=1&page=1&results=20`;
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                return resolve(res['results']);
            })
            .catch(error => {
                //TODO: Handle error
            });
    })
}

