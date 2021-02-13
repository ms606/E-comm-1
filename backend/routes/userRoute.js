import express from 'express';
import user from '../models/userModels';

const router = express.Router();

router.get("/createadmin", async (req, res) => {
	try {
		const user = new User({
		name: 'Muffin',
		email: 'muffi606@gmail.com',
		password: 'kewl',
		isAdmin: true
	});

	const newUser = await user.save();
	res.send(newUser);
	}
	catch {
		res.send({msg: error.message});
	}	
});

export default router;