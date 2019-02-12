import { ToastController } from '@ionic/angular';

export class BasePage {

    constructor(protected toastCtrl1: ToastController) { }

    protected async presentToast(mensagem: string) {
        const toast = await this.toastCtrl1.create({
          message: mensagem,
          duration: 2000,
          position: "bottom"
        });
        toast.present();
      }
    
      protected showLog(mensagem: string): void {
        console.log(mensagem)
      }
}