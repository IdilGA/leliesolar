
 <p align="center">
    <br>
    <a href="https://github.com/IdilGA/leliesolar">Bekijk de repository</a>
</div>
  <a href="https://leliesolar-np2p.vercel.app">🌐 Bekijk de live demo</a>
# LelieSolar Development Document

## 1. Projectoverzicht
Het doel van dit project is het creëren van een moderne, responsieve website voor LelieSolar, een bedrijf gespecialiseerd in zonnepanelen, thuisbatterijen en laadpalen. 

### 1.1 Doelstellingen
- Creëren van een professionele online aanwezigheid
- Informeren van potentiële klanten over duurzame energieoplossingen
- Genereren van leads via contactformulieren
- Showcasen van producten en diensten

### 1.2 Doelgroep
- Particulieren die geïnteresseerd zijn in duurzame energie
- Zakelijke klanten die willen verduurzamen
- Bestaande klanten die service of ondersteuning zoeken

### 1.3 Belangrijkste functionaliteiten
- Informatieve productpagina's
- Geïntegreerde contactformulieren
- Service- en ondersteuningspagina
- Reviewsysteem
- Responsief ontwerp voor alle apparaten

## 2. Technologiestack
### 2.1 Frontend
- React 18
- Next.js 13
- Tailwind CSS voor styling
- Lucide React voor iconen

### 2.2 Development Tools
- Git voor versiebeheer
- VS Code als IDE
- npm als package manager

### 2.3 Deployment
- Vercel platform
- Live omgeving: https://leliesolar-np2p.vercel.app
- Automatische deployments

## 3. Projectstructuur

### Pagina's

- [Hoofdpagina (page.jsx)](./page.jsx)
- [Zonnepanelen (pages/zonnepanelen.jsx)](./pages/zonnepanelen.jsx)
- [Thuisbatterij (pages/thuisbatterij.jsx)](./pages/thuisbatterij.jsx)
- [Laadpaal (pages/laadpaal.jsx)](./pages/laadpaal.jsx)
- [Service (pages/service.jsx)](./pages/service.jsx)
- [Reviews (pages/reviews.jsx)](./pages/reviews.jsx)

### Componenten

- [Navigation (components/Navigation.jsx)](./components/Navigation.jsx)
- [Footer (components/Footer.jsx)](./components/Footer.jsx)
- [ScheduleCallModal (components/schedule-call-modal.jsx)](./components/schedule-call-modal.jsx)
- [ContactFormModal (components/contact-form-modal.jsx)](./components/contact-form-modal.jsx)
- [LaadpaalContactModal (components/laadpaal-contact-modal.jsx)](./components/laadpaal-contact-modal.jsx)
- [ThuisbatterijContactModal (components/thuisbatterij-contact-modal.jsx)](./components/thuisbatterij-contact-modal.jsx)
- [ServiceContactModal (components/service-contact-modal.jsx)](./components/service-contact-modal.jsx)


## 4. Ontwerpbeslissingen
### 4.1 Frontend Framework
- Next.js gekozen voor:
  - Server-side rendering
  - Verbeterde SEO
  - File-based routing
  - Optimale performance

### 4.2 Styling
- Tailwind CSS voor:
  - Snelle ontwikkeling
  - Consistente styling
  - Responsive design
  - Makkelijke aanpasbaarheid

### 4.3 Componenten
- Modulair ontwerp
- Herbruikbare componenten
- Consistent gebruik van props
- Gescheiden verantwoordelijkheden

## 5. Componenten
### 5.1 Navigation
- Hoofdnavigatie component
- Responsive menu
- Geïntegreerde contactknop
- Logo integratie

### 5.2 Contact Modals
- Laadpaal contact formulier
- Thuisbatterij contact formulier
- Service contact formulier
- Schedule call modal

### 5.3 Footer
- Bedrijfsinformatie
- Navigatielinks
- Contactgegevens
- Social media links

## 6. Pagina's
### 6.1 Homepage
- Hero sectie met CTA
- Productoverzicht
- Waarom LelieSolar sectie
- Klantervaringen

### 6.2 Productpagina's
- Gedetailleerde productinformatie
- Specificaties
- Voordelen
- Contact mogelijkheden

### 6.3 Service
- Service pakketten
- Onderhoudsinformatie
- Contact opties
- FAQ sectie

## 7. State Management
### 7.1 React Hooks
- useState voor lokale state
- useEffect voor side effects
- Custom hooks waar nodig

### 7.2 Props Drilling
- Minimaal gehouden
- Gestructureerde data flow
- Duidelijke component hiërarchie

## 8. Styling en Branding
### 8.1 Kleurenpalet
- Primair: #4E930F (groen)
- Secundair: #3A6F0C (donkergroen)
- Achtergrond: #FFFFFF (wit)
- Navigatie: #000000 (zwart)

### 8.2 Typography
- Sans-serif font stack
- Responsive tekst groottes
- Consistente heading hiërarchie

### 8.3 Spacing
- Consistent gebruik van padding en margin
- Responsive containers
- Grid systeem voor layouts

## 9. Optimalisatie
### 9.1 Performance
- Geoptimaliseerde afbeeldingen
- Code splitting
- Lazy loading

### 9.2 SEO
- Meta tags
- Semantic HTML
- Alt teksten voor afbeeldingen

### 9.3 Accessibility
- ARIA labels
- Keyboard navigatie
- Screen reader support

## 10. Toekomstige verbeteringen
### 10.1 Functionaliteit
- CMS integratie
- Blog sectie
- Online betalingen
- Chat support

### 10.2 Performance
- Image optimization
- Caching strategieën
- Core Web Vitals optimalisatie

## 11. Deployment
### 11.1 Hosting
- Platform: Vercel
- Live omgeving: https://leliesolar-np2p.vercel.app

### 11.2 Deployment Process
- Automatische deployments vanaf main branch
- Preview deployments voor pull requests
- Continuous Integration/Continuous Deployment (CI/CD)
- Monitoring via Vercel dashboard

## 12. Conclusie
Dit project demonstreert een moderne web development aanpak met focus op:
- Gebruiksvriendelijkheid
- Performance
- Schaalbaarheid
- Onderhoudsvriendelijkheid

De combinatie van Next.js, Tailwind CSS en Vercel zorgt voor een robuuste en toekomstbestendige oplossing die gemakkelijk uit te breiden is.
