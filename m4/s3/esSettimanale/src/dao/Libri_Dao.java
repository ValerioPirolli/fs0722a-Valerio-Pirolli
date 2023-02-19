package dao;

import java.sql.Date;
import java.util.List;

import javax.persistence.EntityManager;

import model.Libri;
import utils.JpaUtil;
import javax.persistence.TypedQuery;


public class Libri_Dao {

	public static void aggiungiLib(Libri Libro) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {			
			em.getTransaction().begin();
			em.persist(Libro);
			em.getTransaction().commit();
			
			System.out.println("Libro aggiunto");
		}catch(Exception err) {
			em.getTransaction().rollback();
			System.out.println(err.getMessage());
		}finally{
			em.close();
		}
		}
	
	public Libri getById(Long ISBN) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {

			return em.find(Libri.class, ISBN);

		} finally {
			em.close();
		}

	}
	
	public static void deleteFromIsbn(Long ISBN) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {
			em.getTransaction().begin();
            Libri r = em.find(Libri.class, ISBN);
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
	public static Libri ricercaPerISBN(Long ISBN) {
	    EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
	    try {
	        Libri l = em.find(Libri.class, ISBN);
	        if (l == null) {
	        	
	            System.out.println("Libro non trovato");
	        } else {
	            System.out.println("Libro trovato" + l.toString());
	        }
	        return l;
	    } catch (Exception err) {
	        em.getTransaction().rollback();
	        System.out.println(err.getMessage());
	    } finally {
	        em.close();
	    }
	    return null;
	}
	public static List<Libri> ricercaPerAnno(Date anno) {
	    EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
	    try {
	        TypedQuery<Libri> q = em.createQuery("SELECT r FROM Rivista r WHERE r.annoPubblicazione = :anno", Libri.class);
	        q.setParameter("anno", anno);
	        List<Libri> r = q.getResultList();
	        System.out.println("Libri trovati" + r.size());
	        return r;
	    } catch(Exception err) {
	        System.out.println(err.getMessage());
	    } finally {
	        em.close();
	    }
	    return null;
	}
	public static List<Libri> ricercaPerAutore(String autore) {
	    EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
	    try {
	        TypedQuery<Libri> q = em.createQuery("SELECT r FROM Libri r WHERE r.titolo = :titolo", Libri.class);
	        q.setParameter("titolo", autore);
	        List<Libri> r = q.getResultList();
	        System.out.println("Rivista trovata con successo");
	        return r;
	    } catch(Exception err) {
	        System.out.println(err.getMessage());
	    } finally {
	        em.close();
	    }
	    return null;
	}
	public static List<Libri> ricercaPerTitolo(String titolo) {
	    EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
	    try {
	        TypedQuery<Libri> q = em.createQuery("SELECT r FROM Libri r WHERE r.titolo = :titolo", Libri.class);
	        q.setParameter("titolo", titolo);
	        List<Libri> r = q.getResultList();
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
