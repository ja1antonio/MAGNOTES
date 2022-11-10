import { Routes, Route } from 'react-router-dom';

import { Profile } from '../pages/Profile';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { New } from '../pages/New';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
