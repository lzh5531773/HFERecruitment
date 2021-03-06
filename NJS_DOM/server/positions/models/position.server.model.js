/**
 * Created by hfjylzh on 2/17/2017.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PositionSchema = new Schema({
    created: {
        type: Date, default: Date.now
    },
    order: {
        type: Number,
    },
    name: {
        type: String, default: '', trim: true
    },
    subject: {
        type: String, default: ''
    },
    count: {
        type: Number, default: 0
    },
    workAddr:{
        type: String, default:''
    },
    salaryLow: {
        type: Number, default: 0
    },
    salaryHigh: {
        type: Number, default: 0
    },
    description: {
        type: String, default: ''
    },
    descriptionDetail: {
        type: String, default: ''
    },
    welfare: {
        type: Array, default: ''
    },
    newWelfare: {
        type: String, default: ''
    },
    welfareForShow: {
        type: String, default: ''
    },
    jobType: {
        type: String, default: ''
    },
    experience: {
        type: String, default: ''
    },
    certificate:{
        type: String, default: ''
    },
    updated: {
        type: Date, default: Date.now
    },
    status:{
        type: String, default: '未发布'
    },
    jobRequire:{
        type: String, default:''
    },
    browseCount : {
        type : Number, default : 0
    },
    applyCount : {
        type : Number, default : 0
    },
    successMessage : {
        type : String, default : '谢谢您的关注，诚邀您参与面试'
    },
    nature: {
        type: String, default:''
    },
    city:{
        type: String, default:'珠海'
    },
    location: {
        type: String, default:''
    },
    negotiable:{
        type: Boolean, default: false
    },
    dictionary: {
        type: Schema.Types.ObjectId, ref: 'Dictionary'
    }
});

mongoose.model('Position', PositionSchema);