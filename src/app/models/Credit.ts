export class Credit{
    idCredit: number;
    montant: number;
    debiteur: {
        idDeb: number,
        nom: string,
        prenom: string
    }

}
