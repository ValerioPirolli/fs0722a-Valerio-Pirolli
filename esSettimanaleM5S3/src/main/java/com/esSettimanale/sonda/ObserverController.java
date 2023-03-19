package com.esSettimanale.sonda;

import java.util.ArrayList;
import java.util.List;

public class ObserverController{

    List<ObserverSonda> observerSondas = new ArrayList<>();

    public void addObserver(ObserverSonda observerSonda){
         observerSondas.add(observerSonda);
    }
    
    public void notificaObservers(Sonda sonda){
        for(ObserverSonda  ob : observerSondas){
            ob.onAlarm(sonda);
        }
    }

    public void removeObserver(ObserverSonda observerSonda){
        observerSondas.remove(observerSonda);
    }

}
