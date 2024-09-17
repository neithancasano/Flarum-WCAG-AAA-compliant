import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import Button from 'flarum/common/components/Button';
import LinkButton from 'flarum/common/components/LinkButton';
import assist from './assist/assist';

app.initializers.add('hamcq/assisttool', () => {
  extend(HeaderSecondary.prototype, 'items', (items) => {
    new assist({"namespace": "hamcq-assist","domain": ""})
    items.add('assist-tool',
      <div 
        class='Button-label hamcq-assist' 
        style="color:var(--button-color);cursor: pointer;" 
        id='assist-open'
      >
        <i class="fas fa-wheelchair"></i>
        WCGA Menu
      </div>
    , 20);
  });
});
