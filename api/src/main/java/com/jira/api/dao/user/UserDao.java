/**
 * 
 */
package com.jira.api.dao.user;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jira.api.model.user.User;

/**
 * @author cavalier121
 *
 */

@Repository
public class UserDao implements IUserDao {

	@Autowired
	private EntityManager entityManager;

	@Override
	public List<User> findAll() {
		// get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);

		// create a query
		Query<User> theQuery = currentSession.createQuery("from Employee", User.class);

		// execute query and get result list
		List<User> users = theQuery.getResultList();

		// return the results
		return users;
	}

	@Override
	public User findById(String theId) {
		Session currentSession = entityManager.unwrap(Session.class);
		User user = currentSession.get(User.class, theId);
		return user;
	}

	@Override
	public void save(User theUser) {
		Session currentSession = entityManager.unwrap(Session.class);
		currentSession.saveOrUpdate(theUser);

	}

	@Override
	public void deleteById(String theId) {
		Session currentSession = entityManager.unwrap(Session.class);
		@SuppressWarnings("rawtypes")
		Query theQuery = currentSession.createQuery("delete from Employee where id=:employeeId");
		theQuery.setParameter("employeeId", theId);

		theQuery.executeUpdate();

	}

	/**
	 * fake data
	 */
	public User testGetOneUser() {
		User user = new User();
		user.setId("2");
		user.setUserName("JackDog");
		user.setPassword("123456");
		user.setEmail("example@gmail.com");
		user.setAvatarUrl("https://i.imgur.com/mScgy.gif");
		user.setCreatedDate(LocalDateTime.now());
		user.setUpdatedDate(LocalDateTime.now());
		return user;
	}

}
