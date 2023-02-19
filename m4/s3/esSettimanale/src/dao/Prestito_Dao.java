package dao;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import model.Libri;
import model.Prestito;
import utils.JpaUtil;

public class Prestito_Dao {
	public static void aggiungiPrestito(Prestito Prestito) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {			
			em.getTransaction().begin();
			em.persist(Prestito);
			em.getTransaction().commit();
			
			System.out.println("Prestito aggiunto");
		}catch(Exception err) {
			em.getTransaction().rollback();
			System.out.println(err.getMessage());
		}finally{
			em.close();
		}
		}
	
	public Prestito getById(Long id) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {

			return em.find(Prestito.class, id);

		} finally {
			em.close();
		}

	}
	
	public static void eleminaId(Long id) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {
			em.getTransaction().begin();
			Query q = em.createQuery("DELETE Libro Libro WHERE Libro.id = :id");
			q.setParameter("id", id);
			q.executeUpdate();
			em.getTransaction().commit();
			
			System.out.println("Utente eliminato");
		}catch(Exception err) {
			em.getTransaction().rollback();
			System.out.println(err.getMessage());
		}finally{
			em.close();
		}
	}
	public static List<Prestito> ricercaPerTesseraUtente(Long id) {
	    EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
	    try {
	        TypedQuery<Prestito> q = em.createQuery("SELECT r FROM Prestito r WHERE r.utente_id = :id", Prestito.class);
	        q.setParameter("id", id);
	        List<Prestito> r = q.getResultList();
	        System.out.println("Prestito trovato");
	        return r;
	    } catch(Exception err) {
	        System.out.println(err.getMessage());
	    } finally {
	        em.close();
	    }
	    return null;
	}
	public static List<Prestito> prestitiScaduti(){
	    EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
	    try {
	        em.getTransaction().begin();
	        TypedQuery<Prestito> q = em.createQuery("SELECT p FROM Prestito p WHERE p.dat arestituzioneprevista < :dataAttuale AND p.datarestituzioneeffettiva IS NULL", Prestito.class);
	        q.setParameter("dataAttuale", LocalDate.now());
	        List<Prestito> p = q.getResultStream().toList();
	        
	        System.out.println("Query eseguita con successo");
	        
	        return p.isEmpty() ? null : p;
	    } catch(Exception err) {
	        em.getTransaction().rollback();
	        System.out.println(err.getMessage());
	    } finally{
	        em.close();
	    }
	    
	    return null;
	}


}
