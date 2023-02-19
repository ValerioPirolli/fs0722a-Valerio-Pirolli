package model;

import java.sql.Date;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import dao.Libri_Dao;
import dao.Prestito_Dao;
import dao.Riviste_Dao;
import dao.Utente_Dao;

public class Archivio {

	static EntityManagerFactory emf = Persistence.createEntityManagerFactory("esSettimanaleM4S3");
	static EntityManager em = emf.createEntityManager();


	public static void main(String[] args) {
		//addLibro("libro1",new Date(100/1/1), "Pippo", "paura", 200);
		//addUtente("Paperino","Penna", new Date(100/1/1));
		//addPrestito(Libri_Dao.ricercaPerISBN(4L), Utente_Dao.getByTessera(70L), new Date(201, 10, 1));
		//Libri_Dao.ricercaPerISBN(1L);
		//Utente_Dao.getByTessera(10L);
		//Libri_Dao.deleteFromIsbn(3L); funziona
		//Libri_Dao.ricercaPerISBN(2L); funziona
		
		Libri_Dao.ricercaPerAnno(new Date(100/1/1));
		//Libri_Dao.ricercaPerAutore("Pippo");
		//Libri_Dao.ricercaPerTitolo("libro1");
		

	}
public static void addLibro(String tit, Date anno, String autore, String gen, int nPag) {
	Libri a = new Libri();
	a.setTitolo(tit);
	a.setAnnoPubblicazione(anno);
	a.setNumeroPagine(nPag);
	a.setAutore(autore);
	a.setGenere(gen);
	Libri_Dao.aggiungiLib(a);
	
}
public static void addRivista(String tit, Date anno, Periodicita per, int nPag) {
	Riviste a = new Riviste();
	a.setTitolo(tit);
	a.setAnnoPubblicazione(anno);
	a.setNumeroPagine(nPag);
	a.setPeriodicita(per);
	Riviste_Dao.aggiungiRiv(a);
	
}
public static void addUtente(String nome, String cognome, Date data) {
	Utente a = new Utente();
	a.setNome(nome);
	a.setCognome(cognome);
	a.setDataDiNascita(data);
	Utente_Dao.aggiungiUtente(a);
}
public static void addPrestito(Catalogo el, Utente u, Date di) {
	Prestito p = new Prestito();
	
	p.setUtente(u);
	p.setElementoPrestato(el);
	p.setDataInizioPrestito(di);
	p.setScadenza();
	Prestito_Dao.aggiungiPrestito(p);
	}

   /*public Utente saveUtente() {
	 EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
	Utente u = new Utente();
	u.setNome("Mario");
	u.setCognome("Rossi");
	u.setDataDiNascita(new Date(1994/3/14));
	try {
		em.getTransaction().begin();
		em.persist(u);
		em.getTransaction().commit();
	} catch (Exception ec) {
		em.getTransaction().rollback();
		System.out.println(ec.getMessage());
	} finally {
		em.close();
	}

	return u;
}


	public Libri saveLibro() {
	 EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		Libri u = new Libri();
		u.setTitolo("libro1");
		u.setAnnoPubblicazione(new Date(2000/1/15));
		u.setnPagine(200);
		u.setAutore("ciro");
		u.setGenere("napoletano");
		try {
			em.getTransaction().begin();
			em.persist(u);
			em.getTransaction().commit();
		} catch (Exception ec) {
			em.getTransaction().rollback();
			System.out.println(ec.getMessage());
		} finally {
			em.close();
		}

		return u;
	}
	public Riviste saveRivista() {
		 EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		Riviste u = new Riviste();
		u.setTitolo("rivista1");
		u.setAnnoPubblicazione(new Date(2010/1/15));
		u.setnPagine(20);
		u.setPeriodicita(Periodicita.mensile);
		try {
			em.getTransaction().begin();
			em.persist(u);
			em.getTransaction().commit();
		} catch (Exception ec) {
			em.getTransaction().rollback();
			System.out.println(ec.getMessage());
		} finally {
			em.close();
		}

		return u;
	}
	public Utente saveUtente() {
		 EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		Utente u = new Utente();
		u.setNome("Mario");
		u.setCognome("Rossi");
		u.setDataNascita(new Date(1994/3/14));
		try {
			em.getTransaction().begin();
			em.persist(u);
			em.getTransaction().commit();
		} catch (Exception ec) {
			em.getTransaction().rollback();
			System.out.println(ec.getMessage());
		} finally {
			em.close();
		}

		return u;
	}*/
	/*public Prestito savePrestito(Utente u, Catalogo c) {
		Prestito p = new Prestito();
		p.setInizoPrestito(new Date(2023/2/1));
		p.setElementoPrestato(c);
		p.setUtente(u);
		p.setRestituzioneEffettiva(new Date(2023/2/15));
		try {
			em.getTransaction().begin();
			em.persist(p);
			em.getTransaction().commit();
		} catch (Exception ec) {
			em.getTransaction().rollback();
			System.out.println(ec.getMessage());
		} finally {
			em.close();
		}

		return p;
	}
	



	public void delete(Catalogo e) {
		
		try {
			em.getTransaction().begin();
			em.remove(e);
			em.getTransaction().commit();
		} catch (Exception ec) {
			em.getTransaction().rollback();
			System.out.println(ec.getMessage());
		} finally {
			em.close();
		}
		
	}
	public Libri getLibriById(Long id) {
		
		try {
			em.getTransaction().begin();
			return em.find(Libri.class, id);
		} finally {
			em.close();
		}
		
	}
	public Riviste getRivisteById(Long id) {
		
		try {
			em.getTransaction().begin();
			return em.find(Riviste.class, id);
		} finally {
			em.close();
		}
		
	}
	public Riviste getRivisteByDate(Date d) {
		
		try {
			em.getTransaction().begin();
			return em.find(Riviste.class, d);
		} finally {
			em.close();
		}
		
	}
	public Libri getLibriByDate(Date d) {
		
		try {
			em.getTransaction().begin();
			return em.find(Libri.class, d);
		} finally {
			em.close();
		}
		
	}
	public Libri getLibriByAutore(String a) {
		
		try {
			em.getTransaction().begin();
			return em.find(Libri.class, a);
		} finally {
			em.close();
		}
		
	}
	public Libri getLibriByTitolo(String a) {
		
		try {
			em.getTransaction().begin();
			return em.find(Libri.class, a);
		} finally {
			em.close();
		}
		
	}
	public Riviste getRivisteByTitolo(String a) { 
		
		try {
			em.getTransaction().begin();
			return em.find(Riviste.class, a);
		} finally {
			em.close();
		}
		
	}*/

}
