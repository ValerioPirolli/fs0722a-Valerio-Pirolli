package com.esSettimanale.model;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
public class Prenotazione implements Serializable{

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_Prenotazione")
    private Long id;

    @Column(name = "dataPrenotazione")
    private Date dataPrenotazione;
    
    @Column(name = "dataFinePrenotazione")
    private Date dataFinePrenotazione;
    
    @ManyToOne
    @JoinColumn(name = "username")
    private Utente utente;

    @ManyToOne
    @JoinColumn(name = "id_Postazione")
    private Postazione postazione;
    
    
}
