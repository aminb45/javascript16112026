// verifier si un NO de carte bancaire est valide
/*
4111-1111-1111-1111 :PAS VALIDE car il y a des tirets
4111 1111 1111 111   :PAS VALIDE  CAR MANQUE UN CHIFFRE
4111 1111 1111 1112  : pas valide car le dernier chiffre est faux
5555 5555 5555 4434 : pas valide car un chiffre faux
4111 1111 1111 1111 :valide
5555 5555 5555 4444  : valide 


Algorithme de Luhn

1.Parcourir de doite  à gauche
1. ingorer  les caracters non numerique
2. Double (*2) un chiffre sur  deux , en commancant par le deuxieme
3. si un chiffre doulé depasse 9, on  soustraite 9
4 . faire la somme des tous  les chiffres
5. if la somme /10  = valide
*/

// une chaine de caracteres
let c ='abcdgdh';
// lecutre de chaque caractere de la chaine
for (let i=0 ; i<8;  i++);{
console.log(c.substring(i,i+1))}

// lecutre de chaque caractere de la chaine de la finn
for (let i=c.length; i>=0;  i--);{
console.log(c.substring(i,i+1))}



const numero = "5555 5555 5555 4444"

for ( i = numero.length-1 ; i>0; i--){
    let car = numero.substring(i, i+1
    )
    console.log(i,car);
}
