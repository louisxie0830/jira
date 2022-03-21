/**
 * 
 */
package com.jira.api.service.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jira.api.dao.user.IUserDao;
import com.jira.api.dao.user.UserDao;
import com.jira.api.model.user.User;

/**
 * @author cavalier121
 *
 */
@Service
public class UserService {

	@Autowired
	private IUserDao userDao;

	public User getUser() {
		return ((UserDao) userDao).testGetOneUser();
	}

	public User getDBUser() {
		return userDao.findById("1");
	}

}
