package com.esSettimanale.model;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Postazione implements Serializable{

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_Postazione")
    private Long id;

    @Column(name = "descrizione")
    private String descrizione;

    @Column(name = "tipo")
    private Tipo tipo;
    
    @Column(name = "maxP")
    private int maxP;
    
    @OneToMany
    @Column(name = "id_Edificio")
    private Edificio edificio;
    
    @OneToMany(mappedBy = "postazione")
    private List<Prenotazione> prenotazioni;
    

}