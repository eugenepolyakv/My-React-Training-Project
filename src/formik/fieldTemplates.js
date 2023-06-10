import { useField } from 'formik';
import c from './fieldTemplates.module.css';
export const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <div className={c.popup}>
                <input className={c.input} {...field} {...props} />
                {meta.touched && meta.error ? (
                    <span className={`${c.popuptext} ${c.show}`}>
                        {meta.error}
                    </span>
                ) : null}
            </div>
        </>
    );
};

export const MyCheckbox = ({ label, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div>
            <label className="checkbox-input">
                {label}
                <input type="checkbox" {...field} {...props} />
                {/* {children} */}
            </label>
        </div>
    );
};
