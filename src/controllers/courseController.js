// import supabase from '../config/supabase';

export const getAllCourses = async (req, res) => {
    try {
        res.json({
            success: true,
            data: {
                'message': 'here we go'
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};