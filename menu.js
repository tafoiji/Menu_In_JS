var menu = document.getElementById("default");
var menuA = [
    {
        //type: "horizontal",
        name: "Жанр",
        submenu:
        [
            {
                //type: "vertical",
                name: "Рэп", 
                submenu:
                [
                    {
                        name: "New School",
                        url: "https://www.youtube.com/watch?v=Gn2y2K91DG4&t=1082s&ab_channel=Woke"
                    }
                    ,
                    {
                        name: "Old School",
                        url: "https://www.youtube.com/watch?v=IzI4f0qxnjk&ab_channel=%D0%9A%D0%A0%D0%9E%D0%A1%D0%AB"
                    }
                ]
            }
            ,
            {
                name: "Шансон",
                submenu:
                [
                    {
                        name: "Михаил Круг",
                        url: "https://open.spotify.com/track/10IM7tuy9AbIH1rVXQhGQm?si=c42bcd90f9c84e6d"
                    }
                    ,
                    {
                        name: "Макс Корж (все легендарные треки легендарного исполнителя)",
                        submenu: 
                        [
                            {
                                name: "Жить в кайф",
                                url: "https://open.spotify.com/track/2m3PVx1gsVB5upxi94IW8I?si=6957a7b32f444f3d"
                            }
                            ,
                            {
                                name: "Эндорфин",
                                url: "https://open.spotify.com/track/4GbHNkWtWUIZAL0owhoz1i?si=22d945e7d8a24273"
                            }
                            ,
                            {
                                name: "Горы по колено",
                                url: "https://open.spotify.com/track/7f6ALwMTMLAhXCfoHYLCsx?si=07b024c8440e46c9"
                            }
                            ,
                            {
                                name: "Мотылек",
                                url: "https://open.spotify.com/track/3tGcfXzjfMMKW4nZbfdD5H?si=90e31f1dd9ce465b"
                            }
                            ,
                            {
                                name: "Тралики",
                                url: "https://open.spotify.com/track/4bGtP0H90r1ZRipMnb2HxJ?si=ece7153403384045"
                            }
                            ,
                            {
                                name: "Уролог",
                                submenu:
                                [
                                    {
                                        name: "Ссылка на трек",
                                        url: "https://open.spotify.com/track/4qy01ENGYuq5BJyS8nM9rm?si=4b1d0b141a5d4561"
                                    }
                                    ,
                                    {
                                        name: "Записаться",
                                        url: "https://slcrb.by/urologicheskoe-otdelenie/"
                                    }
                                ]
                            }
                            ,
                            {
                                name: "Армия",
                                url: "https://open.spotify.com/track/0nQ7DANKYj4recCcFdb8sl?si=814bc9df31aa4f54"
                            }
                            ,
                            {
                                name: "Небо поможет нам",
                                url: "https://open.spotify.com/track/2JbOwPPXejbYYzantCrMRG?si=66c9a4d95dd64174"
                            }
                        ]
                    }
                    ,
                    {
                        name: "Бутырка",
                        url: "https://open.spotify.com/artist/55rPkwGkPg9yeXDWPhcqL8?si=65KRKVP-ST-UWVI2b-Z6Pw"
                    }
                    ,
                    {
                        name: "Воровайки",
                        url: "https://open.spotify.com/artist/5rQSjjELk41RNkxoPELBlp?si=to2JIyaaRWCof-PH3anrtw"
                    }
                    ,
                    {
                        name: "Пацанка",
                        url: "https://open.spotify.com/artist/1qWLde2MEaxPh46480dpZ8?si=KcRVTL1lQ4CTH0ZVxhZTQA"
                    }
                ]
            }
            ,
            {
                name: "Поп",
                url: "https://fr.wikipedia.org/wiki/Pop_(musique)"
            }
        ]
    }
    ,
    {
        name: "Proof Vinnie Hacker lies about his height!",
        url: "https://i.looksmax.org/attachments/2023/01/3244060_Copy_of_Copy_of_Untitled_presentation.pdf"
    }
    ,
    {
        name: "Рамадан",
        submenu:
        [
            {
                name: "Почему обязательно нужно поститься",
                url: "https://islamqa.info/ru/answers/38064/%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83-%D0%BC%D1%83%D1%81%D1%83%D0%BB%D1%8C%D0%BC%D0%B0%D0%BD%D0%B5-%D1%81%D0%BE%D0%B1%D0%BB%D1%8E%D0%B4%D0%B0%D1%8E%D1%82-%D0%BF%D0%BE%D1%81%D1%82"
            }
            ,
            {
                name: "Как правильно делать намаз",
                submenu:
                [
                    {
                        name: "Женщинам",
                        url: "https://azan.kz/namaz/nisa/sifah-al-salah"
                    }
                    ,
                    {
                        name: "Мужчинам",
                        url: "https://azan.kz/namaz/nisa/sifah-al-salah"
                    }
                ]
            }
            ,
            {
                name: "Как правильно поститься",
                url: "https://24.kg/obschestvo/226485_ispyitanie_velikim_postom_kak_pravilno_derjat_chtobyi_nenavredit_zdorovyu/"
            }
        ]
    }
    ,
    {
        name: "Мусульманам на заметку",
        url: "https://azan.kz/fawaid"
    }
    ,
    {
        name: "Бонус",
        flag: 1
    }
]


showMenu(menuA, menu);

var menuObj;
var newObj;

function showMenu(menuItems, parEl)
{
    if (parEl.children.length > 1)
    {
        parEl.removeChild(parEl.lastChild);
        return;
    }

    newObj = null;
    menuObj = null;
    if (parEl.parentNode.tagName === 'BODY')
    {
        newObj = document.createElement('div');
        newObj.setAttribute("class", "menuHorizontal");
    }
    else if (parEl.parentNode.getAttribute('class') === "menuHorizontal")
    {
        newObj = document.createElement('div');
        newObj.setAttribute("class", "menuVertical");
        // Получить текущее положение существующего элемента div
        var rect = parEl.getBoundingClientRect();
        // Вычислить положение нового элемента div относительно существующего элемента div
        //newObj.style.left = rect.left + 15 + "px";
        newObj.style.top = rect.top + rect.height + 20 + "px";
        newObj.style.marginUp+=20 + 'px'; 
    }
    else
    {
        newObj = document.createElement('div');
        newObj.setAttribute("class", "menuVertical");
        var rect = parEl.getBoundingClientRect();
        newObj.style.left = rect.left + 150 + "px";
        newObj.style.top = rect.top + rect.height + 20 + "px";
        newObj.style.marginLeft+=50 + 'px';
        newObj.style.marginUp+=20 + 'px'; 
    }

        
        for (i = 0; i < menuItems.length; i++)
        {
            menuObj = document.createElement("div");
            //menuObj.setAttribute("class", 'obj');
            menuObj.style.borderStyle = "solid";
            if ('url' in menuItems[i])
            {
                link = document.createElement('a');
                link.setAttribute("href", menuItems[i].url);
                link.textContent = menuItems[i].name;
                menuObj.appendChild(link);
            }

            if ('submenu' in menuItems[i])
            {
                textEl = document.createElement('p');
                textEl.textContent = menuItems[i].name + '...';
                
                menuObj.appendChild(textEl);
                menuObj.addEventListener("mousedown", (function(index, menuObj) {
                    return function(event) {
                      event.stopPropagation();
                  
                      if (event.target === menuObj) {
                        showMenu(menuItems[index].submenu, menuObj);
                      }
                    };
                  })(i, menuObj), false);
            }

            if ('flag' in menuItems[i])
            {

            }

            newObj.appendChild(menuObj);
        }

        //parEl.setAttribute("class", 'obj');
        //newObj.style+="position: absolute; right: 0;bottom: 0; width: 100px; height: 50px;";

        parEl.appendChild(newObj);    
}

