package dao;

import java.sql.Date;
import java.util.List;

import javax.persistence.EntityManager;

import model.Riviste;
import utils.JpaUtil;
import javax.persistence.TypedQuery;


public class Riviste_Dao {

	public static void aggiungiRiv(Riviste Rivista) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {			
			em.getTransaction().begin();
			em.persist(Rivista);
			em.getTransaction().commit();
			
			System.out.println("Rivista aggiunta");
		}catch(Exception err) {
			em.getTransaction().rollback();
			System.out.println(err.getMessage());
		}finally{
			em.close();
		}
		}
	
	public Riviste getById(Long ISBN) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {

			return em.find(Riviste.class, ISBN);

		} finally {
			em.close();
		}

	}
	
	public static void deleteFromIsbn(Long ISBN) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {
			em.getTransaction().begin();
            Riviste r = em.find(Riviste.class, ISBN);
            if (r != null) {
                em.remove(r);
                em.getTransaction().commit();
                System.out.println("Libro eliminato");
            } else {
                throw new RuntimeException("Libro non trovato");
            }
        } catch (Exception e) {
            throw new RuntimeException("Errore durante l'eliminazione del libro", e);
        }finally{
			em.close();
		}
	}
	
	
	
	public static Riviste ricercaPerISBN(Long ISBN) {
	    EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
	    try {
	        Riviste r = em.find(Riviste.class, ISBN);
	        if (r == null) {
	            System.out.println("Libro non trovato");
	        } else {
	            System.out.println("Libro trovato");
	        }
	        return r;
	    } catch (Exception err) {
	        em.getTransaction().rollback();
	        System.out.println(err.getMessage());
	    } finally {
	        em.close();
	    }
	    return null;
	}
	
	
	
	public static List<Riviste> ricercaPerAnno(Date anno) {
	    EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
	    try {
	        TypedQuery<Riviste> q = em.createQuery("SELECT r FROM Rivista r WHERE r.annoPubblicazione = :anno", Riviste.class);
	        q.setParameter("anno", anno);
	        List<Riviste> r = q.getResultList();
	        System.out.println("Rivista trovata con successo");
	        return r;
	    } catch(Exception err) {
	        System.out.println(err.getMessage());
	    } finally {
	        em.close();
	    }
	    return null;
	}
	public static List<Riviste> ricercaPerTitolo(String titolo) {
	    EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
	    try {
	        TypedQuery<Riviste> q = em.createQuery("SELECT r FROM Rivista r WHERE r.titolo = :titolo", Riviste.class);
	        q.setParameter("titolo", titolo);
	        List<Riviste> r = q.getResultList();
	        System.out.println("Rivista trovata con successo");
	        return r;
	    } catch(Exception err) {
	        System.out.println(err.getMessage());
	    } finally {
	        em.close();
	    }
	    return null;
	}

	
}
