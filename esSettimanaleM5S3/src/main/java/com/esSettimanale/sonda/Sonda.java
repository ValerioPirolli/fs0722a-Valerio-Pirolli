package com.esSettimanale.sonda;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
public class Sonda {
    
    private Long id;
    private String longitudine;
    private String latitudine;
    private int smokeLevel;
    //private List<Observer> observers= new ArrayList<>();

}
