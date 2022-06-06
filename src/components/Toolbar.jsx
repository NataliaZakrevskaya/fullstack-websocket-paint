import React from 'react';
import '../styles/toolbar.scss';
import canvasState from '../store/canvasState';
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Eraser from "../tools/Eraser";

const Toolbar = () => {
  return (
    <div className={'toolbar'}>
      <button className="toolbar__btn brush" onClick={() => toolState.setTool(new Brush(canvasState.canvas))}/>
      <button className="toolbar__btn rect" onClick={() => toolState.setTool(new Rect(canvasState.canvas))}/>
      <button className="toolbar__btn circle" onClick={() => toolState.setTool(new Circle(canvasState.canvas))}/>
      <button className="toolbar__btn eraser" onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}/>
      <button className="toolbar__btn line"/>
      <input type="color" style={{marginLeft: 10}}/>
      <button className="toolbar__btn undo"/>
      <button className="toolbar__btn redo"/>
      <button className="toolbar__btn save"/>
    </div>
  );
};

export default Toolbar;