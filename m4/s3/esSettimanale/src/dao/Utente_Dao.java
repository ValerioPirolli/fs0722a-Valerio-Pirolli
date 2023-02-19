package dao;

import javax.persistence.EntityManager;

import model.Utente;
import utils.JpaUtil;
import javax.persistence.Query;


public class Utente_Dao {

	public static void aggiungiUtente(Utente utente) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {			
			em.getTransaction().begin();
			em.persist(utente);
			em.getTransaction().commit();
			
			System.out.println("Utente aggiunto con successo");
		}catch(Exception err) {
			em.getTransaction().rollback();
			System.out.println(err.getMessage());
		}finally{
			em.close();
		}
		}
	
	public static Utente getByTessera(Long numeroTessera) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {
			Utente a = (em.find(Utente.class, numeroTessera));
			System.out.println(a.toString());
			return a;

		} finally {
			em.close();
		}

	}
	
	public static void deleteFromIsbn(Long numeroTessera) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {
			em.getTransaction().begin();
			Query q = em.createQuery("DELETE Libro Libro WHERE Libro.ISBN = :ISBN");
			q.setParameter("numeroTessera", numeroTessera);
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
}
