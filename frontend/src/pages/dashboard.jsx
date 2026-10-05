import { Link } from 'react-router-dom'

function Dashboard() {
	return (
		<main className="signup-page">
			<section className="signup-box">
				<h1>Dashboard</h1>
				<p>Welcome to Date Nepal.</p>
				<p className="login-text">
					<Link to="/login">Return to login</Link>
				</p>
			</section>
		</main>
	)
}

export default Dashboard
