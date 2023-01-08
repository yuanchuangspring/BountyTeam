//卡牌管理器

var cw=((sh-4)/3-15)/384*256;

function postCard1(scene,cardData){
    
    cardContainer=scene.add.container(sw+200,(sh-4)/6);
    addcard=scene.add.sprite(0,0,"mapCard");
    addcard.setScale(((sh-4)/3-15)/384);
    addcard.setTint(0xD2CBA2);
    addcard.layoutType="cardBg";
    
    Aname=scene.add.text(0,-1*((sh-4)/3-15)/2+7.5,cardData.name,{ font: '15px Arial', fill: '#000000' });
    Aname.setOrigin(0.5,0.5);
    
    Ades=scene.add.text(0,-1*((sh-4)/3-15)/2+22.5,cardData.des,{ font: '10px Arial', fill: '#000000' });
    Ades.setOrigin(0.5,0);
    
    cardContainer.add(addcard);
    cardContainer.add(Aname);
    cardContainer.add(Ades);
    current_card[0].push(cardContainer);
    
    moveToPointX(scene,cardContainer,128+(sw-84)/2-sw/2+52+15+(((sh-4)/3-15)/384/2*256)+80*(current_card[0].length-1),1000);
}

function postCard2(scene,cardData){
    cardContainer=scene.add.container(sw+200,(sh-4)/6+(sh-4)/3+3);
    addcard=scene.add.sprite(0,0,"mapCard");
    addcard.setScale(((sh-4)/3-15)/384);
    addcard.setTint(0xD2CBA2);
    addcard.layoutType="cardBg";
    
    cardContainer.add(addcard);
    current_card[1].push(cardContainer);
    
    moveToPointX(scene,cardContainer,128+(sw-84)/2-sw/2+52+15+(((sh-4)/3-15)/384/2*256)+80*(current_card[1].length-1),1000);
}

function postCard3(scene,cardData){
    cardContainer=scene.add.container(sw+200,(sh-4)/6+((sh-4)/3+3)*2+5);
    addcard=scene.add.sprite(0,0,"mapCard");
    addcard.setScale(((sh-4)/3-15)/384);
    addcard.setTint(0xD2CBA2);
    addcard.layoutType="cardBg";
    
    cardContainer.add(addcard);
    current_card[2].push(cardContainer);
    
    moveToPointX(scene,cardContainer,128+(sw-84)/2-sw/2+52+15+(((sh-4)/3-15)/384/2*256)+80*(current_card[2].length-1),1000);
}

