import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../bubblesort/SortingVisualizer/Header';
import '../bubblesort/SortingVisualizer/SortingViz.css';
import {getBubbleSortAnimations} from '../bubblesort/SortingAlgorithms/BubbleSort.js'
import {getSelectionSortAnimations} from '../bubblesort/SortingAlgorithms/SelectionSort.js'
import {getInsertionSortAnimations} from '../bubblesort/SortingAlgorithms/InsertionSort.js'
import {getMergeSort} from '../bubblesort/SortingAlgorithms/MergeSort.js'
import {getQuickSortAnimations} from '../bubblesort/SortingAlgorithms/QuickSort.js'
import {getHeapSortAnimations} from '../bubblesort/SortingAlgorithms/HeapSort.js'

const ANIMATION_SPEED_MS = 1;
// This is the main color of the array bars.
const PRIMARY_COLOR = 'yellow';
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingViz extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            array: [],
        }
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i=1;i<=100;i++){
            array.push(i*5)
        }
        this.setState({array})
    }

    bubbleSort(){
        const [animations,sortArray] = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (i % 4 === 0) || (i % 4 === 1); //bool
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (i % 4 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style; //height
                const barTwoStyle = arrayBars[barTwoIndex].style;   //height
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);
            }
        }
    }

    selectionSort(){
        const [animations,sortArray] = getSelectionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);
            }
        }
        // this.setState({array: sortArray})
        const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS*animations.length/2 + 3000);

    }

    insertionSort(){
        const [animations,sortArray] = getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);
            }
        }
        // this.setState({array: sortArray})
        const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS*animations.length/2 + 3000);

    }

    quickSort(){
        const [animations,sortArray] = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length - 1; i++) {
            const isColorChange = (i % 6 === 0) || (i % 6 === 1);
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (i % 6 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [barOneIndex, barTwoIndex] = animations[i];
                if(barOneIndex === -1) {
                    continue;
                }
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);
            }
        }
        // this.setState({array: sortArray})
        const RESTORE_TIME = parseInt(ANIMATION_SPEED_MS*animations.length/2 + 3000);

    }

    mergeSort(){
        const animations = getMergeSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                },   i * ANIMATION_SPEED_MS);
            }
            else {
                setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    HeapSort(){
        const [animations,sortArray] = getHeapSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = (i % 6 === 0) || (i % 6 === 1); //bool
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (i % 6 === 0) ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style; //height
                const barTwoStyle = arrayBars[barTwoIndex].style;   //height
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);
            }
        }
    }

    afterFunc = (e) => {
        function fn_newCallBack(array){
            var list = array;
            for(var i=0; i< list.length; i++) {
                list[i] = list[i]/5;
            }
            saveToFile_Chrome("Bubblesort_result.txt", list)
        }          
        setTimeout(fn_newCallBack(this.state.array), 0); 
        console.log(e);
        this.setState( {array: e});
        var result = this.state.array;
        this.bubbleSort();
        
        //saveToFile_Chrome("result.txt", list, function(){
        //});
    }

    handleChange(e){
        let file = e.target.files[0];
        let fileReader = new FileReader();
        let list;
        fileReader.onload = () => {
            //console.log(fileReader.result);
            var text = fileReader.result
            var array = text.split(" ");
            console.log(array);
            for(var i=0; i<array.length; i++) {
                array[i] = 5 * Number(array[i]);
            }
            list = array;
            this.afterFunc(list);
        };
        fileReader.readAsText(file);
    }

    afterFunc1 = (e) => {
        function fn_newCallBack(array){
            var list = array;
            for(var i=0; i< list.length; i++) {
                list[i] = list[i]/5;
            }
            saveToFile_Chrome("Selectionsort_result.txt", list)
        }          
        setTimeout(fn_newCallBack(this.state.array), 0); 
        console.log(e);
        this.setState( {array: e});
        //console.log(this.state.array);
        this.selectionSort();
    }

    handleChange1(e){
        let file = e.target.files[0];
        let fileReader = new FileReader();
        let list;
        fileReader.onload = () => {
            //console.log(fileReader.result);
            var text = fileReader.result
            var array = text.split(" ");
            console.log(array);
            for(var i=0; i<array.length; i++) {
                array[i] = 5 * Number(array[i]);
            }
            //console.log(array);
            list = array;
            this.afterFunc1(list);
        };
        fileReader.readAsText(file);
    }

    afterFunc2 = (e) => {
        function fn_newCallBack(array){
            var list = array;
            for(var i=0; i< list.length; i++) {
                list[i] = list[i]/5;
            }
            saveToFile_Chrome("Insertionsort_result.txt", list)
        }          
        setTimeout(fn_newCallBack(this.state.array), 0); 
        console.log(e);
        this.setState( {array: e});
        //console.log(this.state.array);
        this.insertionSort();
    }

    handleChange2(e){
        let file = e.target.files[0];
        let fileReader = new FileReader();
        let list;
        fileReader.onload = () => {
            //console.log(fileReader.result);
            var text = fileReader.result
            var array = text.split(" ");
            console.log(array);
            for(var i=0; i<array.length; i++) {
                array[i] = 5 * Number(array[i]);
            }
            //console.log(array);
            list = array;
            this.afterFunc2(list);
        };
        fileReader.readAsText(file);
    }

    afterFunc3 = (e) => {
        function fn_newCallBack(array){
            var list = array;
            for(var i=0; i< list.length; i++) {
                list[i] = list[i]/5;
            }
            saveToFile_Chrome("Quicksort_result.txt", list)
        }          
        setTimeout(fn_newCallBack(this.state.array), 0); 
        console.log(e);
        this.setState( {array: e});
        this.quickSort();
    }

    handleChange3(e){
        let file = e.target.files[0];
        let fileReader = new FileReader();
        let list;
        fileReader.onload = () => {
            //console.log(fileReader.result);
            var text = fileReader.result
            var array = text.split(" ");
            console.log(array);
            for(var i=0; i<array.length; i++) {
                array[i] = 5 * Number(array[i]);
            }
            //console.log(array);
            list = array;
            this.afterFunc3(list);
        };
        fileReader.readAsText(file);
    }

    afterFunc4 = (e) => {
        function fn_newCallBack(array){
            var list = array;
            for(var i=0; i< list.length; i++) {
                list[i] = list[i]/5;
            }
            saveToFile_Chrome("Mergesort_result.txt", list)
        }          
        setTimeout(fn_newCallBack(this.state.array), 0); 
        console.log(e);
        this.setState( {array: e});
        this.mergeSort();
    }

    handleChange4(e){
        let file = e.target.files[0];
        let fileReader = new FileReader();
        let list;
        fileReader.onload = () => {
            //console.log(fileReader.result);
            var text = fileReader.result
            var array = text.split(" ");
            console.log(array);
            for(var i=0; i<array.length; i++) {
                array[i] = 5 * Number(array[i]);
            }
            //console.log(array);
            list = array;
            this.afterFunc4(list);
        };
        fileReader.readAsText(file);
    }

    afterFunc5 = (e) => {
        function fn_newCallBack(array){
            var list = array;
            for(var i=0; i< list.length; i++) {
                list[i] = list[i]/5;
            }
            saveToFile_Chrome("Heapsort_result.txt", list)
        }          
        setTimeout(fn_newCallBack(this.state.array), 0); 
        console.log(e);
        this.setState( {array: e});
        var result = this.state.array;
        this.mergeSort();
        
        //saveToFile_Chrome("result.txt", list, function(){
        //});
    }

    handleChange5(e){
        let file = e.target.files[0];
        let fileReader = new FileReader();
        let list;
        fileReader.onload = () => {
            //console.log(fileReader.result);
            var text = fileReader.result
            var array = text.split(" ");
            console.log(array);
            for(var i=0; i<array.length; i++) {
                array[i] = 5*Number(array[i]);
            }
            list = array;
            this.afterFunc5(list);
        };
        fileReader.readAsText(file);
    }

    render(){
        const {array} = this.state;
        return(
            <div className="randompage">
            <Header/>
            <br/>
                    <label className="input-file-button" for="input-file">Bubble Sort</label>
                    <input type="file" id="input-file"  style={{display:"none"}} accept='.txt' onChange={this.handleChange.bind(this)}/>
                    <label className="input-file-button4" for="input-file4">Merge Sort</label>
                    <input type="file" id="input-file4"  style={{display:"none"}} accept='.txt' onChange={this.handleChange4.bind(this)}/> 
                    <label className="input-file-button1" for="input-file1">Selection Sort</label>
                    <input type="file" id="input-file1"  style={{display:"none"}} accept='.txt' onChange={this.handleChange1.bind(this)}/> 
                    <label className="input-file-button2" for="input-file2">Insertion Sort</label>
                    <input type="file" id="input-file2"  style={{display:"none"}} accept='.txt' onChange={this.handleChange2.bind(this)}/> 
                    <label className="input-file-button3" for="input-file3">Quick Sort</label>
                    <input type="file" id="input-file3"  style={{display:"none"}} accept='.txt' onChange={this.handleChange3.bind(this)}/> 
                    <label className="input-file-button5" for="input-file5">Heap Sort</label>
                    <input type="file" id="input-file5"  style={{display:"none"}} accept='.txt' onChange={this.handleChange5.bind(this)}/> 
                    <Link to="./"> 
                    <input type = "button" className = "linkhome" value="Go Home"/>
                    </Link>
            <br/>
            <br/>
            <br/>
            <div className="array-container">
            {array.map((value,idx) => (
                <div
                className="array-bar"
                 key={idx}
                 style={{height: `${value}px`}}
                 ></div>
            ))}
            <br></br>
            </div>
            </div>
        )
    }
}

function arrayAreEqual(arrayOne,ArrayTwo){
    if(arrayOne.length !== ArrayTwo.length) return false;
    for(let i=0;i<arrayOne.length;i++){
        if(arrayOne[i] !== ArrayTwo[i]) return false;
    }
    return true;
}

function saveToFile_Chrome(fileName, content) {
    var blob = new Blob([content], { type: 'text/plain' });
    var objURL = window.URL.createObjectURL(blob);
            
    // 이전에 생성된 메모리 해제
    if (window.__Xr_objURL_forCreatingFile__) {
        window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
    }
    window.__Xr_objURL_forCreatingFile__ = objURL;
    var a = document.createElement('a');
    a.download = fileName;
    a.href = objURL;
    a.click();
}
