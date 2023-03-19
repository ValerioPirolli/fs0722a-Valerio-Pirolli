package com.esSettimanale.sonda;

public class ObserverSondaContr implements ObserverSonda {

    @Override
    public void onAlarm(Sonda sonda) {

        System.out.println("http://host/alarm?idsonda=" + sonda.getId() + "&lat=" + sonda.getLatitudine() + "&lon=" + sonda.getLongitudine()+ "&smokelevel=" + sonda.getSmokeLevel());
    
    }
    
}
