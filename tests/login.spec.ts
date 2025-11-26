import { test, expect } from '@playwright/test';

test('completar formulario de login e ingresar', async ({ page }) => {
  // Navegar a la página de login
  await page.goto('/test/login.html');

  // Esperar a que la página cargue completamente
  await page.waitForLoadState('networkidle');

  // Completar campo Usuario con id "tuusuario"
  await page.locator('#tuusuario').fill('mi_usuario');

  // Completar campo Clave con id "tuclave"
  await page.locator('#tuclave').fill('mi_clave_123');

  // Completar campo Email con id "tumail"
  await page.locator('#tumail').fill('usuario@example.com');

  // Esperar 5 segundos antes de hacer click
  await page.waitForTimeout(5000);

  // Hacer click en el botón "Ingresar"
  await page.getByRole('button', { name: 'Ingresar' }).click();

  // Esperar a que se procese la acción
  await page.waitForLoadState('networkidle');

  // Verificar que existe un link con id="volver" y está visible
  const volverLink = page.locator('#volver');
  await expect(volverLink).toBeVisible();

  // Hacer click en el link "volver" para logout
  await volverLink.click();

  // Esperar a que se procese la acción y vuelva a la página inicial
  await page.waitForLoadState('networkidle');
});
