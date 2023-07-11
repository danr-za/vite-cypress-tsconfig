import Shared from './shared';
import { Button } from '@vite-cypress/ui';

describe('shared', () => {
  it('should render', () => {
    cy.mount(
      <Shared>
        <Button />
      </Shared>
    );
    cy.get('button').should('be.visible');
  });
});
