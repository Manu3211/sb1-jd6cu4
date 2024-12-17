export const scrollToSection = (sectionId: string, isHomePage: boolean) => {
  if (!isHomePage) {
    window.location.href = `/#${sectionId}`;
    return;
  }
  
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};