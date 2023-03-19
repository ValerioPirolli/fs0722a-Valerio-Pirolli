package com.esSettimanale.sonda;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class SondaProxy implements ObserverSonda{
    
    private final ObserverSondaContr observerSondaContr;

    @Override
    public void onAlarm(Sonda sonda) {
        if(sonda.getSmokeLevel()>5){
            observerSondaContr.onAlarm(sonda);
        }else{
            System.out.println("Smoke level sotto il livello d'allarme, nessun allarme inviato");
        }
    }

}
