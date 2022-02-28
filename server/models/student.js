import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    studentName: String,
    clicks: Number

});

const student = mongoose.model('student', studentSchema);

export default student;