import React from 'react';
import { Contact } from './sections/Contact';
import { Main } from './sections/Main';
import { Profile } from './sections/Profile';
import { Proyects } from './sections/Proyects';
import { Skills } from './sections/Skills';

export const App = () => (
  <>
    <Main />
    <Profile />
    <Proyects />
    <Skills />
    <Contact />
  </>
);
