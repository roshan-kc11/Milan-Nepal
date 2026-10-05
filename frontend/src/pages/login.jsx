import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const photos = [
    {
        src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        alt: 'Portrait of a woman',
    },
    {
        src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        alt: 'Portrait of a man',
    },
    {
        src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80',
        alt: 'Portrait of a woman outdoors',
    },
    {
        src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        alt: 'Portrait of a man outdoors',
    },
]

function Login() {
    const [activePhoto, setActivePhoto] = useState(0)
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        navigate('/dashboard', { replace: true })
    }

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const rotation = window.setInterval(() => {
            setActivePhoto((current) => (current + 1) % photos.length)
        }, 3500)

        return () => window.clearInterval(rotation)
    }, [])

    return (
        <div className="login-page">
        <div className="brand">
            <img className="brand-logo" src="istockphoto-904836366-612x612.jpg" alt="" />
            <h1 className="brand-title">Date Nepal</h1>
        </div>
        <section className="photo-slider" aria-label="Featured profiles">
            <div className="photo-stage">
                {photos.map((photo, index) => {
                    const offset = (index - activePhoto + photos.length) % photos.length
                    const position = offset === 0
                        ? 'active'
                        : offset === 1
                            ? 'next'
                            : offset === photos.length - 1
                                ? 'previous'
                                : 'far'

                    return (
                        <img
                            className={`photo-slide ${position}`}
                            key={photo.src}
                            src={photo.src}
                            alt={offset === 0 ? photo.alt : ''}
                            aria-hidden={offset !== 0}
                        />
                    )
                })}
            </div>
        </section>
        <div className="login-box">
<h1 className="login-title">
<img className="login-logo" src="istockphoto-904836366-612x612.jpg" alt="" />
<span>Date Nepal</span>
</h1>

<form onSubmit={handleSubmit}>
    <label htmlFor="email">email</label>
    <input 
    type="email" 
    id="email" 
    placeholder="enter your email"
    required />
    <label htmlFor="password">password</label>
    <input 
    type="password" 
    id="password" 
    placeholder="enter your password"
    required />
    <button type="submit">login</button>
    <p>don't have an account? <Link to="/signup">signup</Link></p>
    
</form>
</div>
</div>
    )
}
export default Login