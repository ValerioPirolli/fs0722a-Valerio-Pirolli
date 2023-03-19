package com.esSettimanale.sonda;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class Runner  implements ApplicationRunner{

    @Override
    public void run(ApplicationArguments args) throws Exception {
       
    	Sonda s= new Sonda(1111L,"44.45","14.43",6);
    	Sonda s2= new Sonda(1299L,"50.78","55.12",7);
    	
    	
       ObserverSondaContr logger= new ObserverSondaContr();
       ObserverController observerController= new ObserverController();
       SondaProxy sondaProxy = new SondaProxy(logger);
       
       
       observerController.addObserver(sondaProxy);
       observerController.notificaObservers(s);
       observerController.notificaObservers(s2);


    }
    
}
