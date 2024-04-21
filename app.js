/*Créer une classe nommée Boutique.
Elle devra posséder les propriétés suivantes:
- name: string
- address: string
- type: string
- articles: string[]
- totalCash: number

Elle devra posséder les méthode suivantes:
- buy prenant un nom d’article et un prix en paramètre. Si l’article est disponible à l’intérieur de la propriété articles, incrémenter la propriété totalCash du prix reçu en paramètre.
- refund prenant name et montant en paramètre. Si le paramètre name est égal à la propriété name et que le paramètre montant <= à la propriete totalCash retourne le paramètre montant. Sinon retourne 0.
- toHtml cette fonction devra retourner un htmlElement contenant les informations de notre boutique. Ne pas utiliser innerHtml. Voici la structure html attendue :
        >> Créez un tableau de 3 boutiques.
        >> Pour chacune des boutiques, utilisez la méthode toHtml afin d’ajouter le htmlElement au body.

Defi:
Utilisez la méthode find du type array afin de sélectionner seulement la boutique ayant un propriété type contenant une valeur spécifique. 
*/

/**
 * @description Création de la class Boutique et de ses méthodes.
 * @param {string} name
 * @param {string} address
 * @param {string} type
 * @param {string[]} articles
 * @param {number} totalCash
 */

class Boutique {
    constructor(name, address, type, articles, totalCash) {
        this.name = name,
        this.address = address,
        this.type = type,
        this.articles = articles,
        this.totalCash = totalCash
    }

    buy(article, prix) {
        if(this.articles.includes(article)) {
        return "La boutique a maintenant $" + (this.totalCash += prix);
        } else {
        return "L'article n'est pas disponible."
        }
    }

    refund(name, montant) {
        if(name === this.name && montant <= this.totalCash) {
            return montant;
        } else {
            return 0;
        }
    }

    toHtml() {
        const div = document.createElement('div');
        div.classList.add('boutique_container');

        const ul = document.createElement('ul');
        const nameHtml = document.createElement('li');
        const addressHtml = document.createElement('li');
        const typeHtml = document.createElement('li');
        const articlesHtml = document.createElement('li');
        const totalCashHtml = document.createElement('li');

        nameHtml.textContent = 'Nom : ' + this.name;
        addressHtml.textContent = 'Adresse : ' + this.address;
        typeHtml.textContent = 'Type de boutique : ' + this.type;
        articlesHtml.textContent = 'Articles vendus : ' + this.articles;
        totalCashHtml.textContent = 'Ventes : ' + this.totalCash + ' $';

        div.appendChild(ul);
        ul.appendChild(nameHtml);
        ul.appendChild(addressHtml);
        ul.appendChild(typeHtml);
        ul.appendChild(articlesHtml);
        ul.appendChild(totalCashHtml);

        document.body.appendChild(div);
    }

}

const boutiques = [
    new Boutique('Coin du Coureur', '1159 Av. Cartier, Québec, QC G1R 2S9', 'Sport', ['chaussures', ' vêtements', ' chaussettes', ' accessoires'], 3000),
    new Boutique('Pub Galway', '1112 Av. Cartier, Québec, QC G1R 2S5', 'Pub', ['bières', ' saucisses', ' hamburgers', ' choucroute'], 5000),
    new Boutique('Bügel Fabrique de Bagels', '164 Rue Crémazie O, Québec, QC G1R 1X7', 'Restaurant', ['bagels', ' déjeuners', ' boissons'], 6000)
];

for(let boutique of boutiques) {
    boutique.toHtml();
}

const boutiqueSport = boutiques.find((boutique) => boutique.type === 'Sport');

const boutiquePartie1 = new Boutique('Coureur Nordique', '141 Ch Ste-Foy, Québec, QC G1R 1T1', 'Spécialiste de la course à pied', ['chaussures', 'vêtements', 'chaussettes', 'accessoires'], 2000)

console.log(boutiquePartie1.buy('vêtements', 150));

console.log(boutiquePartie1.refund('Coureur Nordique', 2149));

console.log(boutiqueSport)