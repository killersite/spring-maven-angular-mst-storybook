import { action } from '@storybook/addon-actions';
import { centered } from '@storybook/addon-centered/angular';
// import { withTests } from '@storybook/addon-jest';
// import * as results from '../../addon-jest.testresults.json';
import { object, withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { MyListPostsComponent } from './my-list-posts.component';

storiesOf('Test|Components/MyListPost', module)
  .addDecorator(withNotes)
  .addDecorator(centered)
  .addDecorator(
    moduleMetadata({
      declarations: [MyListPostsComponent]
    })
  )

  .addDecorator(withKnobs)
  .add(
    'simple display',
    () => {
      const posts = object('Posts', [
        {
          id: 1,
          title: 'json-server',
          author: 'typicode',
          remove: action('remove-button-click')
        },
        {
          id: 1,
          title: 'json-server',
          author: 'typicode',
          remove: action('remove-button-click')
        }
      ]);
      return {
        template: '<app-my-list-posts [posts]="posts"></app-my-list-posts>',
        // component: FeedsComponent,
        props: {
          posts
        },
        styles: [
          `
          app-feeds {
            display: block;
            width: 700px;
          }`
        ]
      };
    },
    {
      notes: 'A test note here'
    }
  );
