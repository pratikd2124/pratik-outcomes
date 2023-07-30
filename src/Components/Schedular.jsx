import React from "react";
// import ReactDOM from 'react-dom/client';
// import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
// import { Calendar } from 'smart-webcomponents-react/calendar';
// import { Input } from 'smart-webcomponents-react/input';
// import { Tree, TreeItem, TreeItemsGroup } from 'smart-webcomponents-react/tree';
// import { Scheduler } from 'smart-webcomponents-react/scheduler';
// import './css/schedular.css';

class Schedular extends React.Component {
	// constructor(props) {
	// 	super(props);

	// 	this.scheduler = React.createRef();
	// 	this.calendar = React.createRef();
	// 	this.tree = React.createRef();
	// 	this.primaryContainer = React.createRef();

	// 	const today = new Date(),
	// 		currentDate = today.getDate(),
	// 		currentYear = today.getFullYear(),
	// 		currentMonth = today.getMonth(),
	// 		currentHours = today.getHours(),
	// 		currentMinutes = today.getMinutes(),
	// 		thanksgiving = (() => {
	// 			const tempDate = new Date(currentYear, 10, 1);
	// 			//4th Thursday of November
	// 			tempDate.setDate(tempDate.getDate() - tempDate.getDay() + 25);
	// 			return tempDate;
	// 		})();

	// 	this.nonworkingDays = this.getPastThreeWeekdays(today.getDay());

	// 	this.data = [{
	// 		label: 'Brochure Design Review',
	// 		dateStart: new Date(currentYear, currentMonth, 10, 13, 15),
	// 		dateEnd: new Date(currentYear, currentMonth, 12, 16, 15),
	// 		status: 'tentative',
	// 		class: 'event'
	// 	}, {
	// 		label: 'Website Re-Design Plan',
	// 		dateStart: new Date(currentYear, currentMonth, 16, 16, 45),
	// 		dateEnd: new Date(currentYear, currentMonth, 18, 11, 15),
	// 		class: 'event'
	// 	}, {
	// 		label: 'Update Sales Strategy Documents',
	// 		dateStart: new Date(currentYear, currentMonth, 2, 12, 0),
	// 		dateEnd: new Date(currentYear, currentMonth, 2, 13, 45),
	// 		class: 'event',
	// 		repeat: {
	// 			repeatFreq: 'daily',
	// 			repeatInterval: 2,
	// 			repeatEnd: 5,
	// 			exceptions: [{
	// 				date: new Date(currentYear, currentMonth, 4, 12, 0),
	// 				label: 'Employee on sick leave. Reschedule for next day',
	// 				dateStart: new Date(currentYear, currentMonth, 5),
	// 				dateEnd: new Date(currentYear, currentMonth, 6),
	// 				status: 'outOfOffice',
	// 				backgroundColor: '#F06292'
	// 			},
	// 			{
	// 				date: new Date(currentYear, currentMonth, 8, 12, 0),
	// 				label: 'Employee on sick leave. Reschedule for next day',
	// 				dateStart: new Date(currentYear, currentMonth, 9),
	// 				dateEnd: new Date(currentYear, currentMonth, 10),
	// 				status: 'outOfOffice',
	// 				backgroundColor: '#FFA000'
	// 			}
	// 			]
	// 		}
	// 	}, {
	// 		label: 'Non-Compete Agreements',
	// 		dateStart: new Date(currentYear, currentMonth, currentDate - 1, 8, 15),
	// 		dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 9, 0),
	// 		status: 'outOfOffice',
	// 		class: 'event'
	// 	}, {
	// 		label: 'Approve Hiring of John Jeffers',
	// 		dateStart: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
	// 		dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 11, 15),
	// 		notifications: [{
	// 			interval: 1,
	// 			type: 'days',
	// 			time: [currentHours, currentMinutes],
	// 			message: 'Approve Hiring of John Jeffers tomorrow',
	// 			iconType: 'success'
	// 		}],
	// 		status: 'busy',
	// 		class: 'event'
	// 	}, {
	// 		label: 'Update NDA Agreement',
	// 		dateStart: new Date(currentYear, currentMonth, currentDate - 2, 11, 45),
	// 		dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 13, 45),
	// 		class: 'event'
	// 	}, {
	// 		label: 'Update Employee Files with New NDA',
	// 		dateStart: new Date(currentYear, currentMonth, currentDate + 2, 14, 0),
	// 		dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 16, 45),
	// 		class: 'event'
	// 	}, {
	// 		label: 'Compete Agreements',
	// 		dateStart: new Date(currentYear, currentMonth, currentDate, currentHours, currentMinutes + 15),
	// 		dateEnd: new Date(currentYear, currentMonth, currentDate, currentHours + 1, 45),
	// 		notifications: [{
	// 			interval: 0,
	// 			type: 'days',
	// 			time: [currentHours, currentMinutes + 1],
	// 			message: 'Compete Agreements in 15 minutes',
	// 			iconType: 'time'
	// 		},
	// 		{
	// 			interval: 0,
	// 			type: 'days',
	// 			time: [currentHours, currentMinutes + 2],
	// 			message: 'Compete Agreements in 14 minutes',
	// 			iconType: 'warning'
	// 		}
	// 		],
	// 		status: 'outOfOffice',
	// 		class: 'event'
	// 	}, {
	// 		label: 'Approve Hiring of Mark Waterberg',
	// 		dateStart: new Date(currentYear, currentMonth, currentDate + 3, 10, 0),
	// 		dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 11, 15),
	// 		status: 'busy',
	// 		class: 'event'
	// 	}, {
	// 		label: 'Update Employees Information',
	// 		dateStart: new Date(currentYear, currentMonth, currentDate, 14, 0),
	// 		dateEnd: new Date(currentYear, currentMonth, currentDate, 16, 45),
	// 		class: 'event',
	// 		repeat: {
	// 			repeatFreq: 'weekly',
	// 			repeatInterval: 2,
	// 			repeatOn: [2, 4],
	// 			repeatEnd: new Date(2021, 5, 24)
	// 		}
	// 	},
	// 	{
	// 		label: 'Prepare Shipping Cost Analysis Report',
	// 		dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 30),
	// 		dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 30),
	// 		class: 'event',
	// 		repeat: {
	// 			repeatFreq: 'monthly',
	// 			repeatInterval: 1,
	// 			repeatOn: [new Date(currentYear, currentMonth, currentDate + 1)]
	// 		}
	// 	}, {
	// 		label: 'Provide Feedback on Shippers',
	// 		dateStart: new Date(currentYear, currentMonth, currentDate + 1, 14, 15),
	// 		dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 16, 0),
	// 		status: 'tentative',
	// 		class: 'event'
	// 	}, {
	// 		label: 'Complete Shipper Selection Form',
	// 		dateStart: new Date(currentYear, currentMonth, currentDate + 1, 8, 30),
	// 		dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
	// 		class: 'event'
	// 	}, {
	// 		label: 'Upgrade Server Hardware',
	// 		dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
	// 		dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 14, 15),
	// 		class: 'event'
	// 	}, {
	// 		label: 'Upgrade Apps to Windows RT or stay with WinForms',
	// 		dateStart: new Date(currentYear, currentMonth, currentDate + 2, currentHours, currentMinutes + 5),
	// 		dateEnd: new Date(currentYear, currentMonth, currentDate + 2, currentHours + 2),
	// 		status: 'tentative',
	// 		class: 'event',
	// 		repeat: {
	// 			repeatFreq: 'daily',
	// 			repeatInterval: 1,
	// 			repeatOn: currentDate + 1,
	// 			repeatEnd: new Date(currentYear, currentMonth, currentDate + 7),
	// 			exceptions: [{
	// 				date: new Date(currentYear, currentMonth, currentDate + 4, 10, 30),
	// 				label: 'A day off work',
	// 				status: 'busy',
	// 				backgroundColor: '#64DD17'
	// 			}]
	// 		},
	// 		notifications: [{
	// 			interval: 2,
	// 			type: 'days',
	// 			time: [currentHours, currentMinutes],
	// 			message: 'Upgrade Apps to Windows RT in 5 minutes',
	// 			iconType: 'time'
	// 		}],
	// 	},
	// 	{
	// 		label: 'Peter\'s Birthday',
	// 		dateStart: new Date(currentYear, currentMonth, 5),
	// 		dateEnd: new Date(currentYear, currentMonth, 6),
	// 		class: 'birthday'
	// 	},
	// 	{
	// 		label: 'Michael\'s Brithday',
	// 		dateStart: new Date(currentYear, currentMonth, 10),
	// 		dateEnd: new Date(currentYear, currentMonth, 11),
	// 		class: 'birthday'
	// 	},
	// 	{
	// 		label: 'Christina\'s Birthday',
	// 		dateStart: new Date(currentYear, currentMonth, 20),
	// 		dateEnd: new Date(currentYear, currentMonth, 21),
	// 		class: 'birthday'
	// 	}, {
	// 		label: 'Halloween',
	// 		dateStart: new Date(currentYear, 9, 31),
	// 		dateEnd: new Date(currentYear, 9, 32),
	// 		class: 'holiday'
	// 	}, {
	// 		label: 'Marry Christmas',
	// 		dateStart: new Date(currentYear, 11, 24),
	// 		dateEnd: new Date(currentYear, 11, 26, 23, 59, 59),
	// 		class: 'holiday'
	// 	},
	// 	{
	// 		label: 'Thanksgiving',
	// 		dateStart: thanksgiving,
	// 		dateEnd: new Date(currentYear, 10, thanksgiving.getDate() + 1),
	// 		class: 'holiday'
	// 	},
	// 	{
	// 		label: 'Day after Thanksgiving',
	// 		dateStart: new Date(currentYear, 10, thanksgiving.getDate() + 1),
	// 		dateEnd: new Date(currentYear, 10, thanksgiving.getDate() + 2),
	// 		class: 'holiday'
	// 	},
	// 	{
	// 		label: 'Indipendence Day',
	// 		dateStart: new Date(currentYear, 6, 4),
	// 		dateEnd: new Date(currentYear, 6, 5),
	// 		class: 'holiday'
	// 	},
	// 	{
	// 		label: 'New Year\'s Eve',
	// 		dateStart: new Date(currentYear, 11, 31),
	// 		dateEnd: new Date(currentYear + 1, 0, 1),
	// 		class: 'holiday'
	// 	}
	// 	];
	// }

	// view = 'month';

	// views = ['day',
	// 	{
	// 		type: 'week',
	// 		hideWeekend: true,
	// 	},
	// 	{
	// 		type: 'month',
	// 		hideWeekend: true,
	// 	}, 'agenda',
	// 	{
	// 		label: '4 days',
	// 		value: 'workWeek',
	// 		type: 'week',
	// 		shortcutKey: 'X',
	// 		hideWeekend: false,
	// 		hideNonworkingWeekdays: true,
	// 	}
	// ];

	// firstDayOfWeek = 1;

	// disableDateMenu = true;

	// currentTimeIndicator = true;

	// scrollButtonsPosition = 'far';

	// getPastThreeWeekdays(weekday) {
	// 	let weekdays = [];

	// 	for (let i = 0; i < 3; i++) {
	// 		weekdays.push((weekday - i + 7) % 7);
	// 	}

	// 	return weekdays;
	// }

	// updateData(event) {
	// 	const item = event.detail.item,
	// 		data = this.data;

	// 	for (let i = 0; i < data.length; i++) {
	// 		const dataItem = data[i];

	// 		if (dataItem.label === item.label && dataItem.class === item.class) {
	// 			event.type === 'itemRemove' ? this.data.splice(i, 1) : data.splice(i, 1, item);
	// 			return;
	// 		}
	// 	}
	// }

	// handleToggle() {
	// 	const primaryContainer = this.primaryContainer.current,
	// 		scheduler = this.scheduler.current;

	// 	primaryContainer.classList.toggle('collapse');
	// 	scheduler.disableDateMenu = !primaryContainer.classList.contains('collapse');
	// }

	// addNew() {
	// 	this.scheduler.current.openWindow({
	// 		class: 'event'
	// 	});
	// }

	// handleCalendarChange(event) {
	// 	this.scheduler.current.dateCurrent = event.detail.value;
	// }

	// handleTreeChange() {
	// 	const tree = this.tree.current;
	// 	let selectedIndexes = tree.selectedIndexes, types = [];

	// 	for (let i = 0; i < selectedIndexes.length; i++) {
	// 		tree.getItem(selectedIndexes[i]).then(result => {
	// 			types.push(result.value);

	// 			if (i === selectedIndexes.length - 1) {
	// 				this.scheduler.current.dataSource = this.data.filter(d => types.indexOf(d.class) > -1);
	// 			}
	// 		});
	// 	}
	// }

	// handleDateChange(event) {
	// 	this.calendar.current.selectedDates = [event.detail.value];
	// }

	// init() {
	// }

	// componentDidMount() {
	// 	this.init();
	// }

	render() {
        return (
            <>
            <div class="bg-gray-200">
    <div class="container " style={{width:'100vw'}}>
    <div class="wrapper bg-white rounded shadow w-full ">
      <div class="header flex justify-between border-b p-2">
        <span class="text-lg font-bold">
          2020 July
        </span>
        <div class="buttons">
          <button class="p-1">
              <svg width="1em" fill="gray" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle"  xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>
                <path fill-rule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>
              </svg>
          </button>
          <button class="p-1">
              <svg width="1em" fill="gray" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
                <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
              </svg>
          </button>
        </div>
      </div>
      <table class="w-full">
        <thead>
          <tr>
            <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span class="xl:block lg:block md:block sm:block hidden">Sunday</span>
              <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Sun</span>
            </th>
            <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span class="xl:block lg:block md:block sm:block hidden">Monday</span>
              <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Mon</span>
            </th>
            <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span class="xl:block lg:block md:block sm:block hidden">Tuesday</span>
              <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Tue</span>
            </th>
            <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span class="xl:block lg:block md:block sm:block hidden">Wednesday</span>
              <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Wed</span>
            </th>
            <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span class="xl:block lg:block md:block sm:block hidden">Thursday</span>
              <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Thu</span>
            </th>
            <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span class="xl:block lg:block md:block sm:block hidden">Friday</span>
              <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Fri</span>
            </th>
            <th class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span class="xl:block lg:block md:block sm:block hidden">Saturday</span>
              <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Sat</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center h-20">
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">1</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                  <div
                    class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span class="event-name">
                      Meeting
                    </span>
                    <span class="time">
                      12:00~14:00
                    </span>
                  </div>
                  <div
                    class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span class="event-name">
                      Meeting
                    </span>
                    <span class="time">
                      18:00~20:00
                    </span>
                  </div>
                </div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">2</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">3</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">4</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">6</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">7</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                  <div
                    class="event bg-blue-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span class="event-name">
                      Shopping
                    </span>
                    <span class="time">
                      12:00~14:00
                    </span>
                  </div>
                </div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500 text-sm">8</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
          </tr>

          {/* <!--         line 1 --> */}
          <tr class="text-center h-20">
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">9</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">10</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">12</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">13</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">14</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">15</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500 text-sm">16</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
          </tr>
          {/* <!--         line 1 -->

          <!--         line 2 --> */}
          <tr class="text-center h-20">
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">16</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">17</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">18</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">19</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">20</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">21</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500 text-sm">22</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
          </tr>
          {/* <!--         line 2 -->

          <!--         line 3 --> */}
          <tr class="text-center h-20">
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">23</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">24</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">25</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">26</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">27</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">28</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500 text-sm">29</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
          </tr>
          {/* <!--         line 3 -->

          <!--         line 4 --> */}
          <tr class="text-center h-20">
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">30</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">31</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                  <div class="top h-5 w-full">
                    <span class="text-gray-500">1</span>
                  </div>
                  <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
            <td class="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">2</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">3</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">4</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500 text-sm">5</span>
                </div>
                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
          </tr>
          {/* <!--         line 4 --> */}
        </tbody>
      </table>
    </div>
  </div>
  </div>
            </>
			// <div>
			// 	<div id="primaryContainer" ref={this.primaryContainer}>
			// 		<div id="header">
			// 			<Button id="toggleButton" onClick={this.handleToggle.bind(this)}></Button>
			// 			<div id="title">Scheduler</div>
			// 			<Button id="addNew" className="floating" onClick={this.addNew.bind(this)}><span>Create</span>
			// 			</Button>
			// 		</div>
			// 		<div className="content">
			// 			<section id="sideA">
			// 				<div className="button-container">
			// 					<div id="logo"></div>
			// 				</div>
			// 				<div className="controls-container">
			// 					<Calendar ref={this.calendar} id="calendar" scrollButtonsPosition={this.scrollButtonsPosition} onChange={this.handleCalendarChange.bind(this)}></Calendar>
			// 					<Input id="searchBar" className="underlined" placeholder="Search for people"></Input>
			// 					<Tree ref={this.tree} id="tree" selectionMode="checkBox" toggleElementPosition="far" onChange={this.handleTreeChange.bind(this)}>
			// 						<TreeItemsGroup expanded>My calendars
			//                             <TreeItem value="birthday" selected>Birthdays</TreeItem>
			// 							<TreeItem value="holiday" selected>Holidays</TreeItem>
			// 							<TreeItem value="event" selected>Events</TreeItem>
			// 						</TreeItemsGroup>
			// 					</Tree>
			// 				</div>
			// 			</section>
            //             <section id="sideB">
            //             <smart-scheduler id="scheduler"></smart-scheduler>
			// 				<Scheduler ref={this.scheduler} id="scheduler" dataSource={this.data} view={this.view} views={this.views} nonworkingDays={this.nonworkingDays}
			// 					firstDayOfWeek={this.firstDayOfWeek}
			// 					disableDateMenu={this.disableDateMenu}
			// 					currentTimeIndicator={this.currentTimeIndicator}
			// 					scrollButtonsPosition={this.scrollButtonsPosition} onDragEnd={this.updateData.bind(this)}
			// 					onResizeEnd={this.updateData.bind(this)} onItemUpdate={this.updateData.bind(this)}
			// 					onItemRemove={this.updateData.bind(this)} onDateChange={this.handleDateChange.bind(this)}></Scheduler>
			// 			</section>
			// 		</div>
			// 	</div>
			// </div>
		);
	}
}



export default Schedular;
