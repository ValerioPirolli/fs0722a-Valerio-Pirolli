package com.esSettimanale.model;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Edificio implements Serializable{

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_Edificio")
    private Long id;

    @Column(name = "nome_Edificio")
    private String nome;
    
    @Column(name = "indirizzo")
    private String indirizzo;
    
    @Column(name = "citta")
    private String citta;
    
    @ManyToOne
    private List<Postazione> postazioni;
    

}
