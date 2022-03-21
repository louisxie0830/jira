/**
 * 
 */
package com.jira.api.dao.user;

import java.util.List;

import com.jira.api.model.user.User;

/**
 * @author cavalier121
 *
 */
public interface IUserDao {

	public List<User> findAll();

	public User findById(String theId);

	public void save(User theUser);

	public void deleteById(String theId);
}
