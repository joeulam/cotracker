'use client'
// Import the necessary hooks and functions
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from 'firebase/auth';
import { apps } from '../../firebase_api/firebaseConfig';

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Use onAuthStateChanged as a subscription inside useEffect
    const unsubscribe = onAuthStateChanged(getAuth(apps), (user) => {
      if (user) {
        // User is signed in
        router.push('/dashboard');
      }
    });

    // Cleanup function to unsubscribe when the component is unmounted
    return () => unsubscribe();
  }, [router]);

  // Define the login function outside of onAuthStateChanged
  const loginS = async () => {
    const email = (document.getElementById('email') as HTMLInputElement | null)?.value;
    const password = (document.getElementById('password') as HTMLInputElement | null)?.value;
    const auth = getAuth(apps);

    try {
      setLoading(true);
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      router.push('/dashboard');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div>
        <p>Login</p>
        <div>
          <h3>Email:</h3>
          <input id="email" type="email" className="outline-2 outline-black outline" />
          <h3>Password</h3>
          <input id="password" type="password" className="outline-2 outline-black outline" />
          <br />
          <button onClick={loginS} className="outline-2 outline-black outline mt-5" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </main>
  );
}
