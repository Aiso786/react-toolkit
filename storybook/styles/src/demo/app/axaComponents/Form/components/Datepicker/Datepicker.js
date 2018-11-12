import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import MaskedInput from 'react-maskedinput';
import Iframe from './../../../../components/Iframe/Iframe';
import Code from './../../../../components/Code/Code';
import datePickerTmpl from './datepicker.pug';
import axaComponents from './axa-components.scss';

moment.locale('fr');

moment.updateLocale('fr', {
  weekdaysMin: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
});

class DemoDatepicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
    };
  }

  handleChange(date) {
    this.setState({
      startDate: date,
      date: '',
    });
  }

  maskChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <DatePicker
        className="af-datepicker"
        selected={this.state.startDate}
        onChange={this.handleChange.bind(this)}
        dateFormatCalendar={'DD/MM/YYYY'}
        tabIndex={1}
        fixedHeight
        showMonthDropdown
        showYearDropdown
        readOnly={false}
        autoFocus={false}
        todayButton={"Aujourd'hui"}
        popperPlacement={'right-start'}
        yearDropdownItemNumber={6}
        customInput={
          <MaskedInput mask="11/11/1111" name="date" size="20" onChange={this.maskChange} />
        }
      />
    );
  }
}

const datePicker = (
  <div style={{ position: 'relative' }}>
    <form className="af-form" name="myform">
      <div className="af-form__group row">
        <div className="col-md-2">
          <label className="af-form__group-label">React datepicker</label>
        </div>
        <div className="col-md-10">
          <div className="af-datepicker__container">
            <DemoDatepicker />
            <span className="glyphicon glyphicon-calendar" />
          </div>
          <small className="af-form__message">jj/mm/aaaa</small>
        </div>
      </div>
    </form>
  </div>
);

const datePickerError = (
  <div style={{ position: 'relative' }}>
    <form className="af-form" name="myform">
      <div className="af-form__group row">
        <div className="col-md-2">
          <label className="af-form__group-label">React datepicker</label>
        </div>
        <div className="col-md-10">
          <div className="af-datepicker__container af-datepicker__container--error">
            <DemoDatepicker />
            <span className="glyphicon glyphicon-calendar" />
          </div>
          <small className="af-form__message af-form__message--error">
            <span className="glyphicon glyphicon-exclamation-sign" />
            <span className="af-form__error-text">Message d'erreur</span>
          </small>
        </div>
      </div>
    </form>
  </div>
);

const demos = [
  {
    title: 'Date picker',
    cmpt: datePickerTmpl,
    height: '500',
    child: datePicker,
  },
  {
    title: 'Date picker error',
    cmpt: datePickerTmpl,
    height: '500',
    child: datePickerError,
  },
];

const styles = [axaComponents];

const Datepicker = () => (
  <article className="component">
    <h2 className="component__title">Form</h2>
    {demos.map(demo => (
      <div key={demo.title}>
        <h3 className="af-subtitle">{demo.title}</h3>
        <Tabs>
          <TabList>
            <Tab>Démo</Tab>
            <Tab>Code</Tab>
          </TabList>
          <TabPanel>
            <Iframe height={demo.height} css={styles} template={demo.cmpt}>
              {demo.child}
            </Iframe>
          </TabPanel>
          <TabPanel>
            <Code template={demo.cmpt} />
          </TabPanel>
        </Tabs>
      </div>
    ))}
  </article>
);

export default Datepicker;
