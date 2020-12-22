const adjectives ="Привлекательный, Обаятельный, Стильный, Элегантный, Красивый, Импозантный,Высокий, Низкий, Стройный, Худой, Полный, Толстый, Упитанный, Накачанный, Худощавый,Молодой, Взрослый, Юный, Старый, Пожилой";
const nouns="Ученик, Хозяин, Прохожий,Малыш,Котенок,Хлеб,Овёс,Песок,Василёк"

const adjectivesArray = adjectives.split(",");
const nounsArray = nouns.split(",");
const vocab = adjectivesArray.concat(nounsArray);

export default vocab;