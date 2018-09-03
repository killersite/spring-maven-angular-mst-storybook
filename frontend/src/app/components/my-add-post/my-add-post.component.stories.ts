import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { ReactiveFormsModule } from '@angular/forms';
import { action } from '@storybook/addon-actions';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { MyAddPostComponent } from './my-add-post.component';
import { centered } from '@storybook/addon-centered/angular';

storiesOf('Test|Components/MyAddPost', module)
  .addDecorator(centered)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [ReactiveFormsModule],
      declarations: [MyAddPostComponent]
    })
  )
  .add(
    'simple display',
    () => ({
      component: MyAddPostComponent,
      props: {
        postAdded: action('add-button-click')
      }
    }),
    {
      notes: 'This is a test note'
    }
  );
