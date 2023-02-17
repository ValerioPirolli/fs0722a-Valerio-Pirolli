package model;

import java.sql.Date;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import utils.JpaUtil;

public class Archivio {

	static EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("esSettimanaleM4S3");

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}


	public Libri saveLibro() {
		Libri u = new Libri();
		u.setTitolo("libro1");
		u.setAnnoPubblicazione(new Date(2000/1/15));
		u.setnPagine(200);
		u.setAutore("ciro");
		u.setGenere("napoletano");
		EntityManager em = entityManagerFactory.createEntityManager();
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
		Riviste u = new Riviste();
		u.setTitolo("rivista1");
		u.setAnnoPubblicazione(new Date(2010/1/15));
		u.setnPagine(20);
		u.setPeriodicita(Periodicita.mensile);
		EntityManager em = entityManagerFactory.createEntityManager();
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
		Utente u = new Utente();
		u.setNome("Mario");
		u.setCognome("Rossi");
		u.setDataNascita(new Date(1994/3/14));
		EntityManager em = entityManagerFactory.createEntityManager();
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
	public Prestito savePrestito(Utente u, Catalogo c) {
		Prestito p = new Prestito();
		p.setInizoPrestito(new Date(2023/2/1));
		p.setElementoPrestato(c);
		p.setUtente(u);
		p.setRestituzioneEffettiva(new Date(2023/2/15));
		EntityManager em = entityManagerFactory.createEntityManager();
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
	
	
	
	private void setInizoPrestito(Date date) {
		// TODO Auto-generated method stub
		
	}


	public void delete(Catalogo e) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		
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
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		
		try {
			em.getTransaction().begin();
			return em.find(Libri.class, id);
		} finally {
			em.close();
		}
		
	}
	public Riviste getRivisteById(Long id) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		
		try {
			em.getTransaction().begin();
			return em.find(Riviste.class, id);
		} finally {
			em.close();
		}
		
	}
	public Riviste getRivisteByDate(Date d) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		
		try {
			em.getTransaction().begin();
			return em.find(Riviste.class, d);
		} finally {
			em.close();
		}
		
	}
	public Libri getLibriByDate(Date d) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		
		try {
			em.getTransaction().begin();
			return em.find(Libri.class, d);
		} finally {
			em.close();
		}
		
	}
	public Libri getLibriByAutore(String a) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		
		try {
			em.getTransaction().begin();
			return em.find(Libri.class, a);
		} finally {
			em.close();
		}
		
	}
	public Libri getLibriByTitolo(String a) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		
		try {
			em.getTransaction().begin();
			return em.find(Libri.class, a);
		} finally {
			em.close();
		}
		
	}
	public Riviste getRivisteByTitolo(String a) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		
		try {
			em.getTransaction().begin();
			return em.find(Riviste.class, a);
		} finally {
			em.close();
		}
		
	}

}
