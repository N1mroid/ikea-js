export const getData = {
  url: "database/dataBase.json",
  get(process) {
    console.log(this);
    fetch(this.url);
  },
};

getData.get();
