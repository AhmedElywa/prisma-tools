(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.bun/react-hook-form@7.71.1+4bcfe187168658ad/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Controller",
    ()=>Controller,
    "Form",
    ()=>Form,
    "FormProvider",
    ()=>FormProvider,
    "FormStateSubscribe",
    ()=>FormStateSubscribe,
    "Watch",
    ()=>Watch,
    "appendErrors",
    ()=>appendErrors,
    "createFormControl",
    ()=>createFormControl,
    "get",
    ()=>get,
    "set",
    ()=>set,
    "useController",
    ()=>useController,
    "useFieldArray",
    ()=>useFieldArray,
    "useForm",
    ()=>useForm,
    "useFormContext",
    ()=>useFormContext,
    "useFormState",
    ()=>useFormState,
    "useWatch",
    ()=>useWatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.bun/next@16.1.6+2af12471b7080f02/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var isCheckBoxInput = (element)=>element.type === 'checkbox';
var isDateObject = (value1)=>value1 instanceof Date;
var isNullOrUndefined = (value1)=>value1 == null;
const isObjectType = (value1)=>typeof value1 === 'object';
var isObject = (value1)=>!isNullOrUndefined(value1) && !Array.isArray(value1) && isObjectType(value1) && !isDateObject(value1);
var getEventValue = (event)=>isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var getNodeParentName = (name)=>name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var isNameInFieldArray = (names, name)=>names.has(getNodeParentName(name));
var isPlainObject = (tempObject)=>{
    const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
    return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty('isPrototypeOf');
};
var isWeb = typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined' && typeof document !== 'undefined';
function cloneObject(data) {
    if (data instanceof Date) {
        return new Date(data);
    }
    const isFileListInstance = typeof FileList !== 'undefined' && data instanceof FileList;
    if (isWeb && (data instanceof Blob || isFileListInstance)) {
        return data;
    }
    const isArray = Array.isArray(data);
    if (!isArray && !(isObject(data) && isPlainObject(data))) {
        return data;
    }
    const copy = isArray ? [] : Object.create(Object.getPrototypeOf(data));
    for(const key in data){
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            copy[key] = cloneObject(data[key]);
        }
    }
    return copy;
}
var isKey = (value1)=>/^\w*$/.test(value1);
var isUndefined = (val)=>val === undefined;
var compact = (value1)=>Array.isArray(value1) ? value1.filter(Boolean) : [];
var stringToPath = (input)=>compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));
var get = (object, path, defaultValue)=>{
    if (!path || !isObject(object)) {
        return defaultValue;
    }
    const result = (isKey(path) ? [
        path
    ] : stringToPath(path)).reduce((result, key)=>isNullOrUndefined(result) ? result : result[key], object);
    return isUndefined(result) || result === object ? isUndefined(object[path]) ? defaultValue : object[path] : result;
};
var isBoolean = (value1)=>typeof value1 === 'boolean';
var isFunction = (value1)=>typeof value1 === 'function';
var set = (object, path, value1)=>{
    let index = -1;
    const tempPath = isKey(path) ? [
        path
    ] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while(++index < length){
        const key = tempPath[index];
        let newValue = value1;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
        }
        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
            return;
        }
        object[key] = newValue;
        object = object[key];
    }
};
const EVENTS = {
    BLUR: 'blur',
    FOCUS_OUT: 'focusout',
    CHANGE: 'change'
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all'
};
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate'
};
/**
 * Separate context for `control` to prevent unnecessary rerenders.
 * Internal hooks that only need control use this instead of full form context.
 */ const HookFormControlContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
HookFormControlContext.displayName = 'HookFormControlContext';
/**
 * @internal Internal hook to access only control from context.
 */ const useFormControlContext = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(HookFormControlContext);
var getProxyFormState = (formState, control, localProxyFormState, isRoot = true)=>{
    const result = {
        defaultValues: control._defaultValues
    };
    for(const key in formState){
        Object.defineProperty(result, key, {
            get: ()=>{
                const _key = key;
                if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
                    control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
                }
                localProxyFormState && (localProxyFormState[_key] = true);
                return formState[_key];
            }
        });
    }
    return result;
};
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useLayoutEffect : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect;
/**
 * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
 *
 * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, control } = useForm({
 *     defaultValues: {
 *     firstName: "firstName"
 *   }});
 *   const { dirtyFields } = useFormState({
 *     control
 *   });
 *   const onSubmit = (data) => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input {...register("firstName")} placeholder="First Name" />
 *       {dirtyFields.firstName && <p>Field is dirty.</p>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */ function useFormState(props) {
    const formControl = useFormControlContext();
    const { control = formControl, disabled, name, exact } = props || {};
    const [formState, updateFormState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(control._formState);
    const _localProxyFormState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef({
        isDirty: false,
        isLoading: false,
        dirtyFields: false,
        touchedFields: false,
        validatingFields: false,
        isValidating: false,
        isValid: false,
        errors: false
    });
    useIsomorphicLayoutEffect({
        "useFormState.useIsomorphicLayoutEffect": ()=>control._subscribe({
                name,
                formState: _localProxyFormState.current,
                exact,
                callback: {
                    "useFormState.useIsomorphicLayoutEffect": (formState)=>{
                        !disabled && updateFormState({
                            ...control._formState,
                            ...formState
                        });
                    }
                }["useFormState.useIsomorphicLayoutEffect"]
            })
    }["useFormState.useIsomorphicLayoutEffect"], [
        name,
        disabled,
        exact
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useFormState.useEffect": ()=>{
            _localProxyFormState.current.isValid && control._setValid(true);
        }
    }["useFormState.useEffect"], [
        control
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useFormState.useMemo": ()=>getProxyFormState(formState, control, _localProxyFormState.current, false)
    }["useFormState.useMemo"], [
        formState,
        control
    ]);
}
var isString = (value1)=>typeof value1 === 'string';
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue)=>{
    if (isString(names)) {
        isGlobal && _names.watch.add(names);
        return get(formValues, names, defaultValue);
    }
    if (Array.isArray(names)) {
        return names.map((fieldName)=>(isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
    }
    isGlobal && (_names.watchAll = true);
    return formValues;
};
var isPrimitive = (value1)=>isNullOrUndefined(value1) || !isObjectType(value1);
function deepEqual(object1, object2, _internal_visited = new WeakSet()) {
    if (isPrimitive(object1) || isPrimitive(object2)) {
        return Object.is(object1, object2);
    }
    if (isDateObject(object1) && isDateObject(object2)) {
        return Object.is(object1.getTime(), object2.getTime());
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    if (_internal_visited.has(object1) || _internal_visited.has(object2)) {
        return true;
    }
    _internal_visited.add(object1);
    _internal_visited.add(object2);
    for (const key of keys1){
        const val1 = object1[key];
        if (!keys2.includes(key)) {
            return false;
        }
        if (key !== 'ref') {
            const val2 = object2[key];
            if (isDateObject(val1) && isDateObject(val2) || isObject(val1) && isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2, _internal_visited) : !Object.is(val1, val2)) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Custom hook to subscribe to field change and isolate re-rendering at the component level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @example
 * ```tsx
 * const { control } = useForm();
 * const values = useWatch({
 *   name: "fieldName"
 *   control,
 * })
 * ```
 */ function useWatch(props) {
    const formControl = useFormControlContext();
    const { control = formControl, name, defaultValue, disabled, exact, compute } = props || {};
    const _defaultValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(defaultValue);
    const _compute = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(compute);
    const _computeFormValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const _prevControl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(control);
    const _prevName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(name);
    _compute.current = compute;
    const [value1, updateValue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        "useWatch.useState": ()=>{
            const defaultValue = control._getWatch(name, _defaultValue.current);
            return _compute.current ? _compute.current(defaultValue) : defaultValue;
        }
    }["useWatch.useState"]);
    const getCurrentOutput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useWatch.useCallback[getCurrentOutput]": (values)=>{
            const formValues = generateWatchOutput(name, control._names, values || control._formValues, false, _defaultValue.current);
            return _compute.current ? _compute.current(formValues) : formValues;
        }
    }["useWatch.useCallback[getCurrentOutput]"], [
        control._formValues,
        control._names,
        name
    ]);
    const refreshValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useWatch.useCallback[refreshValue]": (values)=>{
            if (!disabled) {
                const formValues = generateWatchOutput(name, control._names, values || control._formValues, false, _defaultValue.current);
                if (_compute.current) {
                    const computedFormValues = _compute.current(formValues);
                    if (!deepEqual(computedFormValues, _computeFormValues.current)) {
                        updateValue(computedFormValues);
                        _computeFormValues.current = computedFormValues;
                    }
                } else {
                    updateValue(formValues);
                }
            }
        }
    }["useWatch.useCallback[refreshValue]"], [
        control._formValues,
        control._names,
        disabled,
        name
    ]);
    useIsomorphicLayoutEffect({
        "useWatch.useIsomorphicLayoutEffect": ()=>{
            if (_prevControl.current !== control || !deepEqual(_prevName.current, name)) {
                _prevControl.current = control;
                _prevName.current = name;
                refreshValue();
            }
            return control._subscribe({
                name,
                formState: {
                    values: true
                },
                exact,
                callback: {
                    "useWatch.useIsomorphicLayoutEffect": (formState)=>{
                        refreshValue(formState.values);
                    }
                }["useWatch.useIsomorphicLayoutEffect"]
            });
        }
    }["useWatch.useIsomorphicLayoutEffect"], [
        control,
        exact,
        name,
        refreshValue
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useWatch.useEffect": ()=>control._removeUnmounted()
    }["useWatch.useEffect"]);
    // If name or control changed for this render, synchronously reflect the
    // latest value so callers (like useController) see the correct value
    // immediately on the same render.
    // Optimize: Check control reference first before expensive deepEqual
    const controlChanged = _prevControl.current !== control;
    const prevName = _prevName.current;
    // Cache the computed output to avoid duplicate calls within the same render
    // We include shouldReturnImmediate in deps to ensure proper recomputation
    const computedOutput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useWatch.useMemo[computedOutput]": ()=>{
            if (disabled) {
                return null;
            }
            const nameChanged = !controlChanged && !deepEqual(prevName, name);
            const shouldReturnImmediate = controlChanged || nameChanged;
            return shouldReturnImmediate ? getCurrentOutput() : null;
        }
    }["useWatch.useMemo[computedOutput]"], [
        disabled,
        controlChanged,
        name,
        prevName,
        getCurrentOutput
    ]);
    return computedOutput !== null ? computedOutput : value1;
}
/**
 * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns field properties, field and form state. {@link UseControllerReturn}
 *
 * @example
 * ```tsx
 * function Input(props) {
 *   const { field, fieldState, formState } = useController(props);
 *   return (
 *     <div>
 *       <input {...field} placeholder={props.name} />
 *       <p>{fieldState.isTouched && "Touched"}</p>
 *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *     </div>
 *   );
 * }
 * ```
 */ function useController(props) {
    const formControl = useFormControlContext();
    const { name, disabled, control = formControl, shouldUnregister, defaultValue, exact = true } = props;
    const isArrayField = isNameInFieldArray(control._names.array, name);
    const defaultValueMemo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useController.useMemo[defaultValueMemo]": ()=>get(control._formValues, name, get(control._defaultValues, name, defaultValue))
    }["useController.useMemo[defaultValueMemo]"], [
        control,
        name,
        defaultValue
    ]);
    const value1 = useWatch({
        control,
        name,
        defaultValue: defaultValueMemo,
        exact
    });
    const formState = useFormState({
        control,
        name,
        exact
    });
    const _props = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(props);
    const _previousNameRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const _registerProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(control.register(name, {
        ...props.rules,
        value: value1,
        ...isBoolean(props.disabled) ? {
            disabled: props.disabled
        } : {}
    }));
    _props.current = props;
    const fieldState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useController.useMemo[fieldState]": ()=>Object.defineProperties({}, {
                invalid: {
                    enumerable: true,
                    get: {
                        "useController.useMemo[fieldState]": ()=>!!get(formState.errors, name)
                    }["useController.useMemo[fieldState]"]
                },
                isDirty: {
                    enumerable: true,
                    get: {
                        "useController.useMemo[fieldState]": ()=>!!get(formState.dirtyFields, name)
                    }["useController.useMemo[fieldState]"]
                },
                isTouched: {
                    enumerable: true,
                    get: {
                        "useController.useMemo[fieldState]": ()=>!!get(formState.touchedFields, name)
                    }["useController.useMemo[fieldState]"]
                },
                isValidating: {
                    enumerable: true,
                    get: {
                        "useController.useMemo[fieldState]": ()=>!!get(formState.validatingFields, name)
                    }["useController.useMemo[fieldState]"]
                },
                error: {
                    enumerable: true,
                    get: {
                        "useController.useMemo[fieldState]": ()=>get(formState.errors, name)
                    }["useController.useMemo[fieldState]"]
                }
            })
    }["useController.useMemo[fieldState]"], [
        formState,
        name
    ]);
    const onChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useController.useCallback[onChange]": (event)=>_registerProps.current.onChange({
                target: {
                    value: getEventValue(event),
                    name: name
                },
                type: EVENTS.CHANGE
            })
    }["useController.useCallback[onChange]"], [
        name
    ]);
    const onBlur = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useController.useCallback[onBlur]": ()=>_registerProps.current.onBlur({
                target: {
                    value: get(control._formValues, name),
                    name: name
                },
                type: EVENTS.BLUR
            })
    }["useController.useCallback[onBlur]"], [
        name,
        control._formValues
    ]);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useController.useCallback[ref]": (elm)=>{
            const field = get(control._fields, name);
            if (field && field._f && elm) {
                field._f.ref = {
                    focus: ({
                        "useController.useCallback[ref]": ()=>isFunction(elm.focus) && elm.focus()
                    })["useController.useCallback[ref]"],
                    select: ({
                        "useController.useCallback[ref]": ()=>isFunction(elm.select) && elm.select()
                    })["useController.useCallback[ref]"],
                    setCustomValidity: ({
                        "useController.useCallback[ref]": (message)=>isFunction(elm.setCustomValidity) && elm.setCustomValidity(message)
                    })["useController.useCallback[ref]"],
                    reportValidity: ({
                        "useController.useCallback[ref]": ()=>isFunction(elm.reportValidity) && elm.reportValidity()
                    })["useController.useCallback[ref]"]
                };
            }
        }
    }["useController.useCallback[ref]"], [
        control._fields,
        name
    ]);
    const field = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useController.useMemo[field]": ()=>({
                name,
                value: value1,
                ...isBoolean(disabled) || formState.disabled ? {
                    disabled: formState.disabled || disabled
                } : {},
                onChange,
                onBlur,
                ref
            })
    }["useController.useMemo[field]"], [
        name,
        disabled,
        formState.disabled,
        onChange,
        onBlur,
        ref,
        value1
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useController.useEffect": ()=>{
            const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
            const previousName = _previousNameRef.current;
            if (previousName && previousName !== name && !isArrayField) {
                control.unregister(previousName);
            }
            control.register(name, {
                ..._props.current.rules,
                ...isBoolean(_props.current.disabled) ? {
                    disabled: _props.current.disabled
                } : {}
            });
            const updateMounted = {
                "useController.useEffect.updateMounted": (name, value1)=>{
                    const field = get(control._fields, name);
                    if (field && field._f) {
                        field._f.mount = value1;
                    }
                }
            }["useController.useEffect.updateMounted"];
            updateMounted(name, true);
            if (_shouldUnregisterField) {
                const value1 = cloneObject(get(control._options.defaultValues, name, _props.current.defaultValue));
                set(control._defaultValues, name, value1);
                if (isUndefined(get(control._formValues, name))) {
                    set(control._formValues, name, value1);
                }
            }
            !isArrayField && control.register(name);
            _previousNameRef.current = name;
            return ({
                "useController.useEffect": ()=>{
                    (isArrayField ? _shouldUnregisterField && !control._state.action : _shouldUnregisterField) ? control.unregister(name) : updateMounted(name, false);
                }
            })["useController.useEffect"];
        }
    }["useController.useEffect"], [
        name,
        control,
        isArrayField,
        shouldUnregister
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useController.useEffect": ()=>{
            control._setDisabledField({
                disabled,
                name
            });
        }
    }["useController.useEffect"], [
        disabled,
        name,
        control
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useController.useMemo": ()=>({
                field,
                formState,
                fieldState
            })
    }["useController.useMemo"], [
        field,
        formState,
        fieldState
    ]);
}
/**
 * Component based on `useController` hook to work with controlled component.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns provide field handler functions, field and form state.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control } = useForm<FormValues>({
 *     defaultValues: {
 *       test: ""
 *     }
 *   });
 *
 *   return (
 *     <form>
 *       <Controller
 *         control={control}
 *         name="test"
 *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
 *           <>
 *             <input
 *               onChange={onChange} // send value to hook form
 *               onBlur={onBlur} // notify when input is touched
 *               value={value} // return updated value
 *               ref={ref} // set ref for focus management
 *             />
 *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *             <p>{fieldState.isTouched ? "touched" : ""}</p>
 *           </>
 *         )}
 *       />
 *     </form>
 *   );
 * }
 * ```
 */ const Controller = (props)=>props.render(useController(props));
const flatten = (obj)=>{
    const output = {};
    for (const key of Object.keys(obj)){
        if (isObjectType(obj[key]) && obj[key] !== null) {
            const nested = flatten(obj[key]);
            for (const nestedKey of Object.keys(nested)){
                output[`${key}.${nestedKey}`] = nested[nestedKey];
            }
        } else {
            output[key] = obj[key];
        }
    }
    return output;
};
const HookFormContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
HookFormContext.displayName = 'HookFormContext';
/**
 * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @returns return all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */ const useFormContext = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(HookFormContext);
/**
 * A provider component that propagates the `useForm` methods to all children components via [React Context](https://react.dev/reference/react/useContext) API. To be used with {@link useFormContext}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @param props - all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */ const FormProvider = (props)=>{
    const { children, watch, getValues, getFieldState, setError, clearErrors, setValue, trigger, formState, resetField, reset, handleSubmit, unregister, control, register, setFocus, subscribe } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(HookFormContext.Provider, {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
            "FormProvider.useMemo": ()=>({
                    watch,
                    getValues,
                    getFieldState,
                    setError,
                    clearErrors,
                    setValue,
                    trigger,
                    formState,
                    resetField,
                    reset,
                    handleSubmit,
                    unregister,
                    control,
                    register,
                    setFocus,
                    subscribe
                })
        }["FormProvider.useMemo"], [
            clearErrors,
            control,
            formState,
            getFieldState,
            getValues,
            handleSubmit,
            register,
            reset,
            resetField,
            setError,
            setFocus,
            setValue,
            subscribe,
            trigger,
            unregister,
            watch
        ])
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(HookFormControlContext.Provider, {
        value: control
    }, children));
};
const POST_REQUEST = 'post';
/**
 * Form component to manage submission.
 *
 * @param props - to setup submission detail. {@link FormProps}
 *
 * @returns form component or headless render prop.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control, formState: { errors } } = useForm();
 *
 *   return (
 *     <Form action="/api" control={control}>
 *       <input {...register("name")} />
 *       <p>{errors?.root?.server && 'Server error'}</p>
 *       <button>Submit</button>
 *     </Form>
 *   );
 * }
 * ```
 */ function Form(props) {
    const methods = useFormContext();
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const { control = methods.control, onSubmit, children, action, method = POST_REQUEST, headers, encType, onError, render, onSuccess, validateStatus, ...rest } = props;
    const submit = async (event)=>{
        let hasError = false;
        let type = '';
        await control.handleSubmit(async (data)=>{
            const formData = new FormData();
            let formDataJson = '';
            try {
                formDataJson = JSON.stringify(data);
            } catch (_a) {}
            const flattenFormValues = flatten(control._formValues);
            for(const key in flattenFormValues){
                formData.append(key, flattenFormValues[key]);
            }
            if (onSubmit) {
                await onSubmit({
                    data,
                    event,
                    method,
                    formData,
                    formDataJson
                });
            }
            if (action) {
                try {
                    const shouldStringifySubmissionData = [
                        headers && headers['Content-Type'],
                        encType
                    ].some((value1)=>value1 && value1.includes('json'));
                    const response = await fetch(String(action), {
                        method,
                        headers: {
                            ...headers,
                            ...encType && encType !== 'multipart/form-data' ? {
                                'Content-Type': encType
                            } : {}
                        },
                        body: shouldStringifySubmissionData ? formDataJson : formData
                    });
                    if (response && (validateStatus ? !validateStatus(response.status) : response.status < 200 || response.status >= 300)) {
                        hasError = true;
                        onError && onError({
                            response
                        });
                        type = String(response.status);
                    } else {
                        onSuccess && onSuccess({
                            response
                        });
                    }
                } catch (error) {
                    hasError = true;
                    onError && onError({
                        error
                    });
                }
            }
        })(event);
        if (hasError && props.control) {
            props.control._subjects.state.next({
                isSubmitSuccessful: false
            });
            props.control.setError('root.server', {
                type
            });
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Form.useEffect": ()=>{
            setMounted(true);
        }
    }["Form.useEffect"], []);
    return render ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, render({
        submit
    })) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        noValidate: mounted,
        action: action,
        method: method,
        encType: encType,
        onSubmit: submit,
        ...rest
    }, children);
}
const FormStateSubscribe = ({ control, disabled, exact, name, render })=>render(useFormState({
        control,
        name,
        disabled,
        exact
    }));
var appendErrors = (name, validateAllFieldCriteria, errors, type, message)=>validateAllFieldCriteria ? {
        ...errors[name],
        types: {
            ...errors[name] && errors[name].types ? errors[name].types : {},
            [type]: message || true
        }
    } : {};
var convertToArrayPayload = (value1)=>Array.isArray(value1) ? value1 : [
        value1
    ];
var createSubject = ()=>{
    let _observers = [];
    const next = (value1)=>{
        for (const observer of _observers){
            observer.next && observer.next(value1);
        }
    };
    const subscribe = (observer)=>{
        _observers.push(observer);
        return {
            unsubscribe: ()=>{
                _observers = _observers.filter((o)=>o !== observer);
            }
        };
    };
    const unsubscribe = ()=>{
        _observers = [];
    };
    return {
        get observers () {
            return _observers;
        },
        next,
        subscribe,
        unsubscribe
    };
};
function extractFormValues(fieldsState, formValues) {
    const values = {};
    for(const key in fieldsState){
        if (fieldsState.hasOwnProperty(key)) {
            const fieldState = fieldsState[key];
            const fieldValue = formValues[key];
            if (fieldState && isObject(fieldState) && fieldValue) {
                const nestedFieldsState = extractFormValues(fieldState, fieldValue);
                if (isObject(nestedFieldsState)) {
                    values[key] = nestedFieldsState;
                }
            } else if (fieldsState[key]) {
                values[key] = fieldValue;
            }
        }
    }
    return values;
}
var isEmptyObject = (value1)=>isObject(value1) && !Object.keys(value1).length;
var isFileInput = (element)=>element.type === 'file';
var isHTMLElement = (value1)=>{
    if (!isWeb) {
        return false;
    }
    const owner = value1 ? value1.ownerDocument : 0;
    return value1 instanceof (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement);
};
var isMultipleSelect = (element)=>element.type === `select-multiple`;
var isRadioInput = (element)=>element.type === 'radio';
var isRadioOrCheckbox = (ref)=>isRadioInput(ref) || isCheckBoxInput(ref);
var live = (ref)=>isHTMLElement(ref) && ref.isConnected;
function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while(index < length){
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function isEmptyArray(obj) {
    for(const key in obj){
        if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
            return false;
        }
    }
    return true;
}
function unset(object, path) {
    const paths = Array.isArray(path) ? path : isKey(path) ? [
        path
    ] : stringToPath(path);
    const childObject = paths.length === 1 ? object : baseGet(object, paths);
    const index = paths.length - 1;
    const key = paths[index];
    if (childObject) {
        delete childObject[key];
    }
    if (index !== 0 && (isObject(childObject) && isEmptyObject(childObject) || Array.isArray(childObject) && isEmptyArray(childObject))) {
        unset(object, paths.slice(0, -1));
    }
    return object;
}
var objectHasFunction = (data)=>{
    for(const key in data){
        if (isFunction(data[key])) {
            return true;
        }
    }
    return false;
};
function isTraversable(value1) {
    return Array.isArray(value1) || isObject(value1) && !objectHasFunction(value1);
}
function markFieldsDirty(data, fields = {}) {
    for(const key in data){
        const value1 = data[key];
        if (isTraversable(value1)) {
            fields[key] = Array.isArray(value1) ? [] : {};
            markFieldsDirty(value1, fields[key]);
        } else if (!isUndefined(value1)) {
            fields[key] = true;
        }
    }
    return fields;
}
function getDirtyFields(data, formValues, dirtyFieldsFromValues) {
    if (!dirtyFieldsFromValues) {
        dirtyFieldsFromValues = markFieldsDirty(formValues);
    }
    for(const key in data){
        const value1 = data[key];
        if (isTraversable(value1)) {
            if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
                dirtyFieldsFromValues[key] = markFieldsDirty(value1, Array.isArray(value1) ? [] : {});
            } else {
                getDirtyFields(value1, isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
            }
        } else {
            const formValue = formValues[key];
            dirtyFieldsFromValues[key] = !deepEqual(value1, formValue);
        }
    }
    return dirtyFieldsFromValues;
}
const defaultResult = {
    value: false,
    isValid: false
};
const validResult = {
    value: true,
    isValid: true
};
var getCheckboxValue = (options)=>{
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options.filter((option)=>option && option.checked && !option.disabled).map((option)=>option.value);
            return {
                value: values,
                isValid: !!values.length
            };
        }
        return options[0].checked && !options[0].disabled ? options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === '' ? validResult : {
            value: options[0].value,
            isValid: true
        } : validResult : defaultResult;
    }
    return defaultResult;
};
var getFieldValueAs = (value1, { valueAsNumber, valueAsDate, setValueAs })=>isUndefined(value1) ? value1 : valueAsNumber ? value1 === '' ? NaN : value1 ? +value1 : value1 : valueAsDate && isString(value1) ? new Date(value1) : setValueAs ? setValueAs(value1) : value1;
const defaultReturn = {
    isValid: false,
    value: null
};
var getRadioValue = (options)=>Array.isArray(options) ? options.reduce((previous, option)=>option && option.checked && !option.disabled ? {
            isValid: true,
            value: option.value
        } : previous, defaultReturn) : defaultReturn;
function getFieldValue(_f) {
    const ref = _f.ref;
    if (isFileInput(ref)) {
        return ref.files;
    }
    if (isRadioInput(ref)) {
        return getRadioValue(_f.refs).value;
    }
    if (isMultipleSelect(ref)) {
        return [
            ...ref.selectedOptions
        ].map(({ value: value1 })=>value1);
    }
    if (isCheckBoxInput(ref)) {
        return getCheckboxValue(_f.refs).value;
    }
    return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation)=>{
    const fields = {};
    for (const name of fieldsNames){
        const field = get(_fields, name);
        field && set(fields, name, field._f);
    }
    return {
        criteriaMode,
        names: [
            ...fieldsNames
        ],
        fields,
        shouldUseNativeValidation
    };
};
var isRegex = (value1)=>value1 instanceof RegExp;
var getRuleValue = (rule)=>isUndefined(rule) ? rule : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
var getValidationModes = (mode)=>({
        isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
        isOnBlur: mode === VALIDATION_MODE.onBlur,
        isOnChange: mode === VALIDATION_MODE.onChange,
        isOnAll: mode === VALIDATION_MODE.all,
        isOnTouch: mode === VALIDATION_MODE.onTouched
    });
const ASYNC_FUNCTION = 'AsyncFunction';
var hasPromiseValidation = (fieldReference)=>!!fieldReference && !!fieldReference.validate && !!(isFunction(fieldReference.validate) && fieldReference.validate.constructor.name === ASYNC_FUNCTION || isObject(fieldReference.validate) && Object.values(fieldReference.validate).find((validateFunction)=>validateFunction.constructor.name === ASYNC_FUNCTION));
var hasValidation = (options)=>options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
var isWatched = (name, _names, isBlurEvent)=>!isBlurEvent && (_names.watchAll || _names.watch.has(name) || [
        ..._names.watch
    ].some((watchName)=>name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
const iterateFieldsByAction = (fields, action, fieldsNames, abortEarly)=>{
    for (const key of fieldsNames || Object.keys(fields)){
        const field = get(fields, key);
        if (field) {
            const { _f, ...currentField } = field;
            if (_f) {
                if (_f.refs && _f.refs[0] && action(_f.refs[0], key) && !abortEarly) {
                    return true;
                } else if (_f.ref && action(_f.ref, _f.name) && !abortEarly) {
                    return true;
                } else {
                    if (iterateFieldsByAction(currentField, action)) {
                        break;
                    }
                }
            } else if (isObject(currentField)) {
                if (iterateFieldsByAction(currentField, action)) {
                    break;
                }
            }
        }
    }
    return;
};
function schemaErrorLookup(errors, _fields, name) {
    const error = get(errors, name);
    if (error || isKey(name)) {
        return {
            error,
            name
        };
    }
    const names = name.split('.');
    while(names.length){
        const fieldName = names.join('.');
        const field = get(_fields, fieldName);
        const foundError = get(errors, fieldName);
        if (field && !Array.isArray(field) && name !== fieldName) {
            return {
                name
            };
        }
        if (foundError && foundError.type) {
            return {
                name: fieldName,
                error: foundError
            };
        }
        if (foundError && foundError.root && foundError.root.type) {
            return {
                name: `${fieldName}.root`,
                error: foundError.root
            };
        }
        names.pop();
    }
    return {
        name
    };
}
var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot)=>{
    updateFormState(formStateData);
    const { name, ...formState } = formStateData;
    return isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key)=>_proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
};
var shouldSubscribeByName = (name, signalName, exact)=>!name || !signalName || name === signalName || convertToArrayPayload(name).some((currentName)=>currentName && (exact ? currentName === signalName : currentName.startsWith(signalName) || signalName.startsWith(currentName)));
var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode)=>{
    if (mode.isOnAll) {
        return false;
    } else if (!isSubmitted && mode.isOnTouch) {
        return !(isTouched || isBlurEvent);
    } else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
        return !isBlurEvent;
    } else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
        return isBlurEvent;
    }
    return true;
};
var unsetEmptyArray = (ref, name)=>!compact(get(ref, name)).length && unset(ref, name);
var updateFieldArrayRootError = (errors, error, name)=>{
    const fieldArrayErrors = convertToArrayPayload(get(errors, name));
    set(fieldArrayErrors, 'root', error[name]);
    set(errors, name, fieldArrayErrors);
    return errors;
};
function getValidateError(result, ref, type = 'validate') {
    if (isString(result) || Array.isArray(result) && result.every(isString) || isBoolean(result) && !result) {
        return {
            type,
            message: isString(result) ? result : '',
            ref
        };
    }
}
var getValueAndMessage = (validationData)=>isObject(validationData) && !isRegex(validationData) ? validationData : {
        value: validationData,
        message: ''
    };
var validateField = async (field, disabledFieldNames, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray)=>{
    const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount } = field._f;
    const inputValue = get(formValues, name);
    if (!mount || disabledFieldNames.has(name)) {
        return {};
    }
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidity = (message)=>{
        if (shouldUseNativeValidation && inputRef.reportValidity) {
            inputRef.setCustomValidity(isBoolean(message) ? '' : message || '');
            inputRef.reportValidity();
        }
    };
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = (valueAsNumber || isFileInput(ref)) && isUndefined(ref.value) && isUndefined(inputValue) || isHTMLElement(ref) && ref.value === '' || inputValue === '' || Array.isArray(inputValue) && !inputValue.length;
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength)=>{
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = {
            type: exceedMax ? maxType : minType,
            message,
            ref,
            ...appendErrorsCurry(exceedMax ? maxType : minType, message)
        };
    };
    if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
        const { value: value1, message } = isString(required) ? {
            value: !!required,
            message: required
        } : getValueAndMessage(required);
        if (value1) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.required,
                message,
                ref: inputRef,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        } else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            const convertTimeToDate = (time)=>new Date(new Date().toDateString() + ' ' + time);
            const isTime = ref.type == 'time';
            const isWeek = ref.type == 'week';
            if (isString(maxOutput.value) && inputValue) {
                exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value) && inputValue) {
                exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if ((maxLength || minLength) && !isEmpty && (isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if (pattern && !isEmpty && isString(inputValue)) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.pattern,
                message,
                ref,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (validate) {
        if (isFunction(validate)) {
            const result = await validate(inputValue, formValues);
            const validateError = getValidateError(result, inputRef);
            if (validateError) {
                error[name] = {
                    ...validateError,
                    ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
                };
                if (!validateAllFieldCriteria) {
                    setCustomValidity(validateError.message);
                    return error;
                }
            }
        } else if (isObject(validate)) {
            let validationResult = {};
            for(const key in validate){
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
                if (validateError) {
                    validationResult = {
                        ...validateError,
                        ...appendErrorsCurry(key, validateError.message)
                    };
                    setCustomValidity(validateError.message);
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = {
                    ref: inputRef,
                    ...validationResult
                };
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    setCustomValidity(true);
    return error;
};
const defaultOptions = {
    mode: VALIDATION_MODE.onSubmit,
    reValidateMode: VALIDATION_MODE.onChange,
    shouldFocusError: true
};
function createFormControl(props = {}) {
    let _options = {
        ...defaultOptions,
        ...props
    };
    let _formState = {
        submitCount: 0,
        isDirty: false,
        isReady: false,
        isLoading: isFunction(_options.defaultValues),
        isValidating: false,
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        touchedFields: {},
        dirtyFields: {},
        validatingFields: {},
        errors: _options.errors || {},
        disabled: _options.disabled || false
    };
    let _fields = {};
    let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values) ? cloneObject(_options.defaultValues || _options.values) || {} : {};
    let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
    let _state = {
        action: false,
        mount: false,
        watch: false,
        keepIsValid: false
    };
    let _names = {
        mount: new Set(),
        disabled: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set()
    };
    let delayErrorCallback;
    let timer = 0;
    const defaultProxyFormState = {
        isDirty: false,
        dirtyFields: false,
        validatingFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false
    };
    const _proxyFormState = {
        ...defaultProxyFormState
    };
    let _proxySubscribeFormState = {
        ..._proxyFormState
    };
    const _subjects = {
        array: createSubject(),
        state: createSubject()
    };
    const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
    const debounce = (callback)=>(wait)=>{
            clearTimeout(timer);
            timer = setTimeout(callback, wait);
        };
    const _setValid = async (shouldUpdateValid)=>{
        if (_state.keepIsValid) {
            return;
        }
        if (!_options.disabled && (_proxyFormState.isValid || _proxySubscribeFormState.isValid || shouldUpdateValid)) {
            let isValid;
            if (_options.resolver) {
                isValid = isEmptyObject((await _runSchema()).errors);
                _updateIsValidating();
            } else {
                isValid = await executeBuiltInValidation(_fields, true);
            }
            if (isValid !== _formState.isValid) {
                _subjects.state.next({
                    isValid
                });
            }
        }
    };
    const _updateIsValidating = (names, isValidating)=>{
        if (!_options.disabled && (_proxyFormState.isValidating || _proxyFormState.validatingFields || _proxySubscribeFormState.isValidating || _proxySubscribeFormState.validatingFields)) {
            (names || Array.from(_names.mount)).forEach((name)=>{
                if (name) {
                    isValidating ? set(_formState.validatingFields, name, isValidating) : unset(_formState.validatingFields, name);
                }
            });
            _subjects.state.next({
                validatingFields: _formState.validatingFields,
                isValidating: !isEmptyObject(_formState.validatingFields)
            });
        }
    };
    const _setFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true)=>{
        if (args && method && !_options.disabled) {
            _state.action = true;
            if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
                const fieldValues = method(get(_fields, name), args.argA, args.argB);
                shouldSetValues && set(_fields, name, fieldValues);
            }
            if (shouldUpdateFieldsAndState && Array.isArray(get(_formState.errors, name))) {
                const errors = method(get(_formState.errors, name), args.argA, args.argB);
                shouldSetValues && set(_formState.errors, name, errors);
                unsetEmptyArray(_formState.errors, name);
            }
            if ((_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && shouldUpdateFieldsAndState && Array.isArray(get(_formState.touchedFields, name))) {
                const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
                shouldSetValues && set(_formState.touchedFields, name, touchedFields);
            }
            if (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) {
                _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
            }
            _subjects.state.next({
                name,
                isDirty: _getDirty(name, values),
                dirtyFields: _formState.dirtyFields,
                errors: _formState.errors,
                isValid: _formState.isValid
            });
        } else {
            set(_formValues, name, values);
        }
    };
    const updateErrors = (name, error)=>{
        set(_formState.errors, name, error);
        _subjects.state.next({
            errors: _formState.errors
        });
    };
    const _setErrors = (errors)=>{
        _formState.errors = errors;
        _subjects.state.next({
            errors: _formState.errors,
            isValid: false
        });
    };
    const updateValidAndValue = (name, shouldSkipSetValueAs, value1, ref)=>{
        const field = get(_fields, name);
        if (field) {
            const defaultValue = get(_formValues, name, isUndefined(value1) ? get(_defaultValues, name) : value1);
            isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
            _state.mount && !_state.action && _setValid();
        }
    };
    const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender)=>{
        let shouldUpdateField = false;
        let isPreviousDirty = false;
        const output = {
            name
        };
        if (!_options.disabled) {
            if (!isBlurEvent || shouldDirty) {
                if (_proxyFormState.isDirty || _proxySubscribeFormState.isDirty) {
                    isPreviousDirty = _formState.isDirty;
                    _formState.isDirty = output.isDirty = _getDirty();
                    shouldUpdateField = isPreviousDirty !== output.isDirty;
                }
                const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
                isPreviousDirty = !!get(_formState.dirtyFields, name);
                isCurrentFieldPristine ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
                output.dirtyFields = _formState.dirtyFields;
                shouldUpdateField = shouldUpdateField || (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) && isPreviousDirty !== !isCurrentFieldPristine;
            }
            if (isBlurEvent) {
                const isPreviousFieldTouched = get(_formState.touchedFields, name);
                if (!isPreviousFieldTouched) {
                    set(_formState.touchedFields, name, isBlurEvent);
                    output.touchedFields = _formState.touchedFields;
                    shouldUpdateField = shouldUpdateField || (_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && isPreviousFieldTouched !== isBlurEvent;
                }
            }
            shouldUpdateField && shouldRender && _subjects.state.next(output);
        }
        return shouldUpdateField ? output : {};
    };
    const shouldRenderByError = (name, isValid, error, fieldState)=>{
        const previousFieldError = get(_formState.errors, name);
        const shouldUpdateValid = (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isBoolean(isValid) && _formState.isValid !== isValid;
        if (_options.delayError && error) {
            delayErrorCallback = debounce(()=>updateErrors(name, error));
            delayErrorCallback(_options.delayError);
        } else {
            clearTimeout(timer);
            delayErrorCallback = null;
            error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
        }
        if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
            const updatedFormState = {
                ...fieldState,
                ...shouldUpdateValid && isBoolean(isValid) ? {
                    isValid
                } : {},
                errors: _formState.errors,
                name
            };
            _formState = {
                ..._formState,
                ...updatedFormState
            };
            _subjects.state.next(updatedFormState);
        }
    };
    const _runSchema = async (name)=>{
        _updateIsValidating(name, true);
        const result = await _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
        return result;
    };
    const executeSchemaAndUpdateState = async (names)=>{
        const { errors } = await _runSchema(names);
        _updateIsValidating(names);
        if (names) {
            for (const name of names){
                const error = get(errors, name);
                error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
            }
        } else {
            _formState.errors = errors;
        }
        return errors;
    };
    const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
        valid: true
    })=>{
        for(const name in fields){
            const field = fields[name];
            if (field) {
                const { _f, ...fieldValue } = field;
                if (_f) {
                    const isFieldArrayRoot = _names.array.has(_f.name);
                    const isPromiseFunction = field._f && hasPromiseValidation(field._f);
                    if (isPromiseFunction && _proxyFormState.validatingFields) {
                        _updateIsValidating([
                            _f.name
                        ], true);
                    }
                    const fieldError = await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
                    if (isPromiseFunction && _proxyFormState.validatingFields) {
                        _updateIsValidating([
                            _f.name
                        ]);
                    }
                    if (fieldError[_f.name]) {
                        context.valid = false;
                        if (shouldOnlyCheckValid || props.shouldUseNativeValidation) {
                            break;
                        }
                    }
                    !shouldOnlyCheckValid && (get(fieldError, _f.name) ? isFieldArrayRoot ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : set(_formState.errors, _f.name, fieldError[_f.name]) : unset(_formState.errors, _f.name));
                }
                !isEmptyObject(fieldValue) && await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context);
            }
        }
        return context.valid;
    };
    const _removeUnmounted = ()=>{
        for (const name of _names.unMount){
            const field = get(_fields, name);
            field && (field._f.refs ? field._f.refs.every((ref)=>!live(ref)) : !live(field._f.ref)) && unregister(name);
        }
        _names.unMount = new Set();
    };
    const _getDirty = (name, data)=>!_options.disabled && (name && data && set(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
    const _getWatch = (names, defaultValue, isGlobal)=>generateWatchOutput(names, _names, {
            ..._state.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? {
                [names]: defaultValue
            } : defaultValue
        }, isGlobal, defaultValue);
    const _getFieldArray = (name)=>compact(get(_state.mount ? _formValues : _defaultValues, name, _options.shouldUnregister ? get(_defaultValues, name, []) : []));
    const setFieldValue = (name, value1, options = {})=>{
        const field = get(_fields, name);
        let fieldValue = value1;
        if (field) {
            const fieldReference = field._f;
            if (fieldReference) {
                !fieldReference.disabled && set(_formValues, name, getFieldValueAs(value1, fieldReference));
                fieldValue = isHTMLElement(fieldReference.ref) && isNullOrUndefined(value1) ? '' : value1;
                if (isMultipleSelect(fieldReference.ref)) {
                    [
                        ...fieldReference.ref.options
                    ].forEach((optionRef)=>optionRef.selected = fieldValue.includes(optionRef.value));
                } else if (fieldReference.refs) {
                    if (isCheckBoxInput(fieldReference.ref)) {
                        fieldReference.refs.forEach((checkboxRef)=>{
                            if (!checkboxRef.defaultChecked || !checkboxRef.disabled) {
                                if (Array.isArray(fieldValue)) {
                                    checkboxRef.checked = !!fieldValue.find((data)=>data === checkboxRef.value);
                                } else {
                                    checkboxRef.checked = fieldValue === checkboxRef.value || !!fieldValue;
                                }
                            }
                        });
                    } else {
                        fieldReference.refs.forEach((radioRef)=>radioRef.checked = radioRef.value === fieldValue);
                    }
                } else if (isFileInput(fieldReference.ref)) {
                    fieldReference.ref.value = '';
                } else {
                    fieldReference.ref.value = fieldValue;
                    if (!fieldReference.ref.type) {
                        _subjects.state.next({
                            name,
                            values: cloneObject(_formValues)
                        });
                    }
                }
            }
        }
        (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
        options.shouldValidate && trigger(name);
    };
    const setValues = (name, value1, options)=>{
        for(const fieldKey in value1){
            if (!value1.hasOwnProperty(fieldKey)) {
                return;
            }
            const fieldValue = value1[fieldKey];
            const fieldName = name + '.' + fieldKey;
            const field = get(_fields, fieldName);
            (_names.array.has(name) || isObject(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
        }
    };
    const setValue = (name, value1, options = {})=>{
        const field = get(_fields, name);
        const isFieldArray = _names.array.has(name);
        const cloneValue = cloneObject(value1);
        set(_formValues, name, cloneValue);
        if (isFieldArray) {
            _subjects.array.next({
                name,
                values: cloneObject(_formValues)
            });
            if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields || _proxySubscribeFormState.isDirty || _proxySubscribeFormState.dirtyFields) && options.shouldDirty) {
                _subjects.state.next({
                    name,
                    dirtyFields: getDirtyFields(_defaultValues, _formValues),
                    isDirty: _getDirty(name, cloneValue)
                });
            }
        } else {
            field && !field._f && !isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
        }
        if (isWatched(name, _names)) {
            _subjects.state.next({
                ..._formState,
                name,
                values: cloneObject(_formValues)
            });
        } else {
            _subjects.state.next({
                name: _state.mount ? name : undefined,
                values: cloneObject(_formValues)
            });
        }
    };
    const onChange = async (event)=>{
        _state.mount = true;
        const target = event.target;
        let name = target.name;
        let isFieldValueUpdated = true;
        const field = get(_fields, name);
        const _updateIsFieldValueUpdated = (fieldValue)=>{
            isFieldValueUpdated = Number.isNaN(fieldValue) || isDateObject(fieldValue) && isNaN(fieldValue.getTime()) || deepEqual(fieldValue, get(_formValues, name, fieldValue));
        };
        const validationModeBeforeSubmit = getValidationModes(_options.mode);
        const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
        if (field) {
            let error;
            let isValid;
            const fieldValue = target.type ? getFieldValue(field._f) : getEventValue(event);
            const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
            const shouldSkipValidation = !hasValidation(field._f) && !_options.resolver && !get(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
            const watched = isWatched(name, _names, isBlurEvent);
            set(_formValues, name, fieldValue);
            if (isBlurEvent) {
                if (!target || !target.readOnly) {
                    field._f.onBlur && field._f.onBlur(event);
                    delayErrorCallback && delayErrorCallback(0);
                }
            } else if (field._f.onChange) {
                field._f.onChange(event);
            }
            const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent);
            const shouldRender = !isEmptyObject(fieldState) || watched;
            !isBlurEvent && _subjects.state.next({
                name,
                type: event.type,
                values: cloneObject(_formValues)
            });
            if (shouldSkipValidation) {
                if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
                    if (_options.mode === 'onBlur') {
                        if (isBlurEvent) {
                            _setValid();
                        }
                    } else if (!isBlurEvent) {
                        _setValid();
                    }
                }
                return shouldRender && _subjects.state.next({
                    name,
                    ...watched ? {} : fieldState
                });
            }
            !isBlurEvent && watched && _subjects.state.next({
                ..._formState
            });
            if (_options.resolver) {
                const { errors } = await _runSchema([
                    name
                ]);
                _updateIsValidating([
                    name
                ]);
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
                    const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
                    error = errorLookupResult.error;
                    name = errorLookupResult.name;
                    isValid = isEmptyObject(errors);
                }
            } else {
                _updateIsValidating([
                    name
                ], true);
                error = (await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
                _updateIsValidating([
                    name
                ]);
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    if (error) {
                        isValid = false;
                    } else if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
                        isValid = await executeBuiltInValidation(_fields, true);
                    }
                }
            }
            if (isFieldValueUpdated) {
                field._f.deps && (!Array.isArray(field._f.deps) || field._f.deps.length > 0) && trigger(field._f.deps);
                shouldRenderByError(name, isValid, error, fieldState);
            }
        }
    };
    const _focusInput = (ref, key)=>{
        if (get(_formState.errors, key) && ref.focus) {
            ref.focus();
            return 1;
        }
        return;
    };
    const trigger = async (name, options = {})=>{
        let isValid;
        let validationResult;
        const fieldNames = convertToArrayPayload(name);
        if (_options.resolver) {
            const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
            isValid = isEmptyObject(errors);
            validationResult = name ? !fieldNames.some((name)=>get(errors, name)) : isValid;
        } else if (name) {
            validationResult = (await Promise.all(fieldNames.map(async (fieldName)=>{
                const field = get(_fields, fieldName);
                return await executeBuiltInValidation(field && field._f ? {
                    [fieldName]: field
                } : field);
            }))).every(Boolean);
            !(!validationResult && !_formState.isValid) && _setValid();
        } else {
            validationResult = isValid = await executeBuiltInValidation(_fields);
        }
        _subjects.state.next({
            ...!isString(name) || (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isValid !== _formState.isValid ? {} : {
                name
            },
            ..._options.resolver || !name ? {
                isValid
            } : {},
            errors: _formState.errors
        });
        options.shouldFocus && !validationResult && iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
        return validationResult;
    };
    const getValues = (fieldNames, config)=>{
        let values = {
            ..._state.mount ? _formValues : _defaultValues
        };
        if (config) {
            values = extractFormValues(config.dirtyFields ? _formState.dirtyFields : _formState.touchedFields, values);
        }
        return isUndefined(fieldNames) ? values : isString(fieldNames) ? get(values, fieldNames) : fieldNames.map((name)=>get(values, name));
    };
    const getFieldState = (name, formState)=>({
            invalid: !!get((formState || _formState).errors, name),
            isDirty: !!get((formState || _formState).dirtyFields, name),
            error: get((formState || _formState).errors, name),
            isValidating: !!get(_formState.validatingFields, name),
            isTouched: !!get((formState || _formState).touchedFields, name)
        });
    const clearErrors = (name)=>{
        name && convertToArrayPayload(name).forEach((inputName)=>unset(_formState.errors, inputName));
        _subjects.state.next({
            errors: name ? _formState.errors : {}
        });
    };
    const setError = (name, error, options)=>{
        const ref = (get(_fields, name, {
            _f: {}
        })._f || {}).ref;
        const currentError = get(_formState.errors, name) || {};
        // Don't override existing error messages elsewhere in the object tree.
        const { ref: currentRef, message, type, ...restOfErrorTree } = currentError;
        set(_formState.errors, name, {
            ...restOfErrorTree,
            ...error,
            ref
        });
        _subjects.state.next({
            name,
            errors: _formState.errors,
            isValid: false
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watch = (name, defaultValue)=>isFunction(name) ? _subjects.state.subscribe({
            next: (payload)=>'values' in payload && name(_getWatch(undefined, defaultValue), payload)
        }) : _getWatch(name, defaultValue, true);
    const _subscribe = (props)=>_subjects.state.subscribe({
            next: (formState)=>{
                if (shouldSubscribeByName(props.name, formState.name, props.exact) && shouldRenderFormState(formState, props.formState || _proxyFormState, _setFormState, props.reRenderRoot)) {
                    props.callback({
                        values: {
                            ..._formValues
                        },
                        ..._formState,
                        ...formState,
                        defaultValues: _defaultValues
                    });
                }
            }
        }).unsubscribe;
    const subscribe = (props)=>{
        _state.mount = true;
        _proxySubscribeFormState = {
            ..._proxySubscribeFormState,
            ...props.formState
        };
        return _subscribe({
            ...props,
            formState: {
                ...defaultProxyFormState,
                ...props.formState
            }
        });
    };
    const unregister = (name, options = {})=>{
        for (const fieldName of name ? convertToArrayPayload(name) : _names.mount){
            _names.mount.delete(fieldName);
            _names.array.delete(fieldName);
            if (!options.keepValue) {
                unset(_fields, fieldName);
                unset(_formValues, fieldName);
            }
            !options.keepError && unset(_formState.errors, fieldName);
            !options.keepDirty && unset(_formState.dirtyFields, fieldName);
            !options.keepTouched && unset(_formState.touchedFields, fieldName);
            !options.keepIsValidating && unset(_formState.validatingFields, fieldName);
            !_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
        }
        _subjects.state.next({
            values: cloneObject(_formValues)
        });
        _subjects.state.next({
            ..._formState,
            ...!options.keepDirty ? {} : {
                isDirty: _getDirty()
            }
        });
        !options.keepIsValid && _setValid();
    };
    const _setDisabledField = ({ disabled, name })=>{
        if (isBoolean(disabled) && _state.mount || !!disabled || _names.disabled.has(name)) {
            const wasDisabled = _names.disabled.has(name);
            const isDisabled = !!disabled;
            const disabledStateChanged = wasDisabled !== isDisabled;
            disabled ? _names.disabled.add(name) : _names.disabled.delete(name);
            disabledStateChanged && _state.mount && !_state.action && _setValid();
        }
    };
    const register = (name, options = {})=>{
        let field = get(_fields, name);
        const disabledIsDefined = isBoolean(options.disabled) || isBoolean(_options.disabled);
        set(_fields, name, {
            ...field || {},
            _f: {
                ...field && field._f ? field._f : {
                    ref: {
                        name
                    }
                },
                name,
                mount: true,
                ...options
            }
        });
        _names.mount.add(name);
        if (field) {
            _setDisabledField({
                disabled: isBoolean(options.disabled) ? options.disabled : _options.disabled,
                name
            });
        } else {
            updateValidAndValue(name, true, options.value);
        }
        return {
            ...disabledIsDefined ? {
                disabled: options.disabled || _options.disabled
            } : {},
            ..._options.progressive ? {
                required: !!options.required,
                min: getRuleValue(options.min),
                max: getRuleValue(options.max),
                minLength: getRuleValue(options.minLength),
                maxLength: getRuleValue(options.maxLength),
                pattern: getRuleValue(options.pattern)
            } : {},
            name,
            onChange,
            onBlur: onChange,
            ref: (ref)=>{
                if (ref) {
                    register(name, options);
                    field = get(_fields, name);
                    const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll('input,select,textarea')[0] || ref : ref : ref;
                    const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
                    const refs = field._f.refs || [];
                    if (radioOrCheckbox ? refs.find((option)=>option === fieldRef) : fieldRef === field._f.ref) {
                        return;
                    }
                    set(_fields, name, {
                        _f: {
                            ...field._f,
                            ...radioOrCheckbox ? {
                                refs: [
                                    ...refs.filter(live),
                                    fieldRef,
                                    ...Array.isArray(get(_defaultValues, name)) ? [
                                        {}
                                    ] : []
                                ],
                                ref: {
                                    type: fieldRef.type,
                                    name
                                }
                            } : {
                                ref: fieldRef
                            }
                        }
                    });
                    updateValidAndValue(name, false, undefined, fieldRef);
                } else {
                    field = get(_fields, name, {});
                    if (field._f) {
                        field._f.mount = false;
                    }
                    (_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
                }
            }
        };
    };
    const _focusError = ()=>_options.shouldFocusError && iterateFieldsByAction(_fields, _focusInput, _names.mount);
    const _disableForm = (disabled)=>{
        if (isBoolean(disabled)) {
            _subjects.state.next({
                disabled
            });
            iterateFieldsByAction(_fields, (ref, name)=>{
                const currentField = get(_fields, name);
                if (currentField) {
                    ref.disabled = currentField._f.disabled || disabled;
                    if (Array.isArray(currentField._f.refs)) {
                        currentField._f.refs.forEach((inputRef)=>{
                            inputRef.disabled = currentField._f.disabled || disabled;
                        });
                    }
                }
            }, 0, false);
        }
    };
    const handleSubmit = (onValid, onInvalid)=>async (e)=>{
            let onValidError = undefined;
            if (e) {
                e.preventDefault && e.preventDefault();
                e.persist && e.persist();
            }
            let fieldValues = cloneObject(_formValues);
            _subjects.state.next({
                isSubmitting: true
            });
            if (_options.resolver) {
                const { errors, values } = await _runSchema();
                _updateIsValidating();
                _formState.errors = errors;
                fieldValues = cloneObject(values);
            } else {
                await executeBuiltInValidation(_fields);
            }
            if (_names.disabled.size) {
                for (const name of _names.disabled){
                    unset(fieldValues, name);
                }
            }
            unset(_formState.errors, 'root');
            if (isEmptyObject(_formState.errors)) {
                _subjects.state.next({
                    errors: {}
                });
                try {
                    await onValid(fieldValues, e);
                } catch (error) {
                    onValidError = error;
                }
            } else {
                if (onInvalid) {
                    await onInvalid({
                        ..._formState.errors
                    }, e);
                }
                _focusError();
                setTimeout(_focusError);
            }
            _subjects.state.next({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(_formState.errors) && !onValidError,
                submitCount: _formState.submitCount + 1,
                errors: _formState.errors
            });
            if (onValidError) {
                throw onValidError;
            }
        };
    const resetField = (name, options = {})=>{
        if (get(_fields, name)) {
            if (isUndefined(options.defaultValue)) {
                setValue(name, cloneObject(get(_defaultValues, name)));
            } else {
                setValue(name, options.defaultValue);
                set(_defaultValues, name, cloneObject(options.defaultValue));
            }
            if (!options.keepTouched) {
                unset(_formState.touchedFields, name);
            }
            if (!options.keepDirty) {
                unset(_formState.dirtyFields, name);
                _formState.isDirty = options.defaultValue ? _getDirty(name, cloneObject(get(_defaultValues, name))) : _getDirty();
            }
            if (!options.keepError) {
                unset(_formState.errors, name);
                _proxyFormState.isValid && _setValid();
            }
            _subjects.state.next({
                ..._formState
            });
        }
    };
    const _reset = (formValues, keepStateOptions = {})=>{
        const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
        const cloneUpdatedValues = cloneObject(updatedValues);
        const isEmptyResetValues = isEmptyObject(formValues);
        const values = isEmptyResetValues ? _defaultValues : cloneUpdatedValues;
        if (!keepStateOptions.keepDefaultValues) {
            _defaultValues = updatedValues;
        }
        if (!keepStateOptions.keepValues) {
            if (keepStateOptions.keepDirtyValues) {
                const fieldsToCheck = new Set([
                    ..._names.mount,
                    ...Object.keys(getDirtyFields(_defaultValues, _formValues))
                ]);
                for (const fieldName of Array.from(fieldsToCheck)){
                    const isDirty = get(_formState.dirtyFields, fieldName);
                    const existingValue = get(_formValues, fieldName);
                    const newValue = get(values, fieldName);
                    if (isDirty && !isUndefined(existingValue)) {
                        set(values, fieldName, existingValue);
                    } else if (!isDirty && !isUndefined(newValue)) {
                        setValue(fieldName, newValue);
                    }
                }
            } else {
                if (isWeb && isUndefined(formValues)) {
                    for (const name of _names.mount){
                        const field = get(_fields, name);
                        if (field && field._f) {
                            const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
                            if (isHTMLElement(fieldReference)) {
                                const form = fieldReference.closest('form');
                                if (form) {
                                    form.reset();
                                    break;
                                }
                            }
                        }
                    }
                }
                if (keepStateOptions.keepFieldsRef) {
                    for (const fieldName of _names.mount){
                        setValue(fieldName, get(values, fieldName));
                    }
                } else {
                    _fields = {};
                }
            }
            _formValues = _options.shouldUnregister ? keepStateOptions.keepDefaultValues ? cloneObject(_defaultValues) : {} : cloneObject(values);
            _subjects.array.next({
                values: {
                    ...values
                }
            });
            _subjects.state.next({
                values: {
                    ...values
                }
            });
        }
        _names = {
            mount: keepStateOptions.keepDirtyValues ? _names.mount : new Set(),
            unMount: new Set(),
            array: new Set(),
            disabled: new Set(),
            watch: new Set(),
            watchAll: false,
            focus: ''
        };
        _state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid || !!keepStateOptions.keepDirtyValues || !_options.shouldUnregister && !isEmptyObject(values);
        _state.watch = !!_options.shouldUnregister;
        _state.keepIsValid = !!keepStateOptions.keepIsValid;
        _state.action = false;
        // Clear errors synchronously to prevent validation errors on subsequent submissions
        // This fixes the issue where form.reset() causes validation errors on subsequent
        // submissions in Next.js 16 with Server Actions
        if (!keepStateOptions.keepErrors) {
            _formState.errors = {};
        }
        _subjects.state.next({
            submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
            isDirty: isEmptyResetValues ? false : keepStateOptions.keepDirty ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
            isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
            dirtyFields: isEmptyResetValues ? {} : keepStateOptions.keepDirtyValues ? keepStateOptions.keepDefaultValues && _formValues ? getDirtyFields(_defaultValues, _formValues) : _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : keepStateOptions.keepDirty ? _formState.dirtyFields : {},
            touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
            errors: keepStateOptions.keepErrors ? _formState.errors : {},
            isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful ? _formState.isSubmitSuccessful : false,
            isSubmitting: false,
            defaultValues: _defaultValues
        });
    };
    const reset = (formValues, keepStateOptions)=>_reset(isFunction(formValues) ? formValues(_formValues) : formValues, {
            ..._options.resetOptions,
            ...keepStateOptions
        });
    const setFocus = (name, options = {})=>{
        const field = get(_fields, name);
        const fieldReference = field && field._f;
        if (fieldReference) {
            const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
            if (fieldRef.focus) {
                // Use setTimeout to ensure focus happens after any pending state updates
                // This fixes the issue where setFocus doesn't work immediately after setError
                setTimeout(()=>{
                    fieldRef.focus();
                    options.shouldSelect && isFunction(fieldRef.select) && fieldRef.select();
                });
            }
        }
    };
    const _setFormState = (updatedFormState)=>{
        _formState = {
            ..._formState,
            ...updatedFormState
        };
    };
    const _resetDefaultValues = ()=>isFunction(_options.defaultValues) && _options.defaultValues().then((values)=>{
            reset(values, _options.resetOptions);
            _subjects.state.next({
                isLoading: false
            });
        });
    const methods = {
        control: {
            register,
            unregister,
            getFieldState,
            handleSubmit,
            setError,
            _subscribe,
            _runSchema,
            _updateIsValidating,
            _focusError,
            _getWatch,
            _getDirty,
            _setValid,
            _setFieldArray,
            _setDisabledField,
            _setErrors,
            _getFieldArray,
            _reset,
            _resetDefaultValues,
            _removeUnmounted,
            _disableForm,
            _subjects,
            _proxyFormState,
            get _fields () {
                return _fields;
            },
            get _formValues () {
                return _formValues;
            },
            get _state () {
                return _state;
            },
            set _state (value){
                _state = value;
            },
            get _defaultValues () {
                return _defaultValues;
            },
            get _names () {
                return _names;
            },
            set _names (value){
                _names = value;
            },
            get _formState () {
                return _formState;
            },
            get _options () {
                return _options;
            },
            set _options (value){
                _options = {
                    ..._options,
                    ...value
                };
            }
        },
        subscribe,
        trigger,
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        reset,
        resetField,
        clearErrors,
        unregister,
        setError,
        setFocus,
        getFieldState
    };
    return {
        ...methods,
        formControl: methods
    };
}
var generateId = ()=>{
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    const d = typeof performance === 'undefined' ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
};
var getFocusFieldName = (name, index, options = {})=>options.shouldFocus || isUndefined(options.shouldFocus) ? options.focusName || `${name}.${isUndefined(options.focusIndex) ? index : options.focusIndex}.` : '';
var appendAt = (data, value1)=>[
        ...data,
        ...convertToArrayPayload(value1)
    ];
var fillEmptyArray = (value1)=>Array.isArray(value1) ? value1.map(()=>undefined) : undefined;
function insert(data, index, value1) {
    return [
        ...data.slice(0, index),
        ...convertToArrayPayload(value1),
        ...data.slice(index)
    ];
}
var moveArrayAt = (data, from, to)=>{
    if (!Array.isArray(data)) {
        return [];
    }
    if (isUndefined(data[to])) {
        data[to] = undefined;
    }
    data.splice(to, 0, data.splice(from, 1)[0]);
    return data;
};
var prependAt = (data, value1)=>[
        ...convertToArrayPayload(value1),
        ...convertToArrayPayload(data)
    ];
function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [
        ...data
    ];
    for (const index of indexes){
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index)=>isUndefined(index) ? [] : removeAtIndexes(data, convertToArrayPayload(index).sort((a, b)=>a - b));
var swapArrayAt = (data, indexA, indexB)=>{
    [data[indexA], data[indexB]] = [
        data[indexB],
        data[indexA]
    ];
};
var updateAt = (fieldValues, index, value1)=>{
    fieldValues[index] = value1;
    return fieldValues;
};
/**
 * A custom hook that exposes convenient methods to perform operations with a list of dynamic inputs that need to be appended, updated, removed etc. • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn) • [Video](https://youtu.be/4MrbfGSFY2A)
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn)
 *
 * @param props - useFieldArray props
 *
 * @returns methods - functions to manipulate with the Field Arrays (dynamic inputs) {@link UseFieldArrayReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, control, handleSubmit, reset, trigger, setError } = useForm({
 *     defaultValues: {
 *       test: []
 *     }
 *   });
 *   const { fields, append } = useFieldArray({
 *     control,
 *     name: "test"
 *   });
 *
 *   return (
 *     <form onSubmit={handleSubmit(data => console.log(data))}>
 *       {fields.map((item, index) => (
 *          <input key={item.id} {...register(`test.${index}.firstName`)}  />
 *       ))}
 *       <button type="button" onClick={() => append({ firstName: "bill" })}>
 *         append
 *       </button>
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */ function useFieldArray(props) {
    const formControl = useFormControlContext();
    const { control = formControl, name, keyName = 'id', shouldUnregister, rules } = props;
    const [fields, setFields] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(control._getFieldArray(name));
    const ids = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(control._getFieldArray(name).map(generateId));
    const _actioned = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    control._names.array.add(name);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useFieldArray.useMemo": ()=>rules && fields.length >= 0 && control.register(name, rules)
    }["useFieldArray.useMemo"], [
        control,
        name,
        fields.length,
        rules
    ]);
    useIsomorphicLayoutEffect({
        "useFieldArray.useIsomorphicLayoutEffect": ()=>control._subjects.array.subscribe({
                next: {
                    "useFieldArray.useIsomorphicLayoutEffect": ({ values, name: fieldArrayName })=>{
                        if (fieldArrayName === name || !fieldArrayName) {
                            const fieldValues = get(values, name);
                            if (Array.isArray(fieldValues)) {
                                setFields(fieldValues);
                                ids.current = fieldValues.map(generateId);
                            }
                        }
                    }
                }["useFieldArray.useIsomorphicLayoutEffect"]
            }).unsubscribe
    }["useFieldArray.useIsomorphicLayoutEffect"], [
        control,
        name
    ]);
    const updateValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useFieldArray.useCallback[updateValues]": (updatedFieldArrayValues)=>{
            _actioned.current = true;
            control._setFieldArray(name, updatedFieldArrayValues);
        }
    }["useFieldArray.useCallback[updateValues]"], [
        control,
        name
    ]);
    const append = (value1, options)=>{
        const appendValue = convertToArrayPayload(cloneObject(value1));
        const updatedFieldArrayValues = appendAt(control._getFieldArray(name), appendValue);
        control._names.focus = getFocusFieldName(name, updatedFieldArrayValues.length - 1, options);
        ids.current = appendAt(ids.current, appendValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, appendAt, {
            argA: fillEmptyArray(value1)
        });
    };
    const prepend = (value1, options)=>{
        const prependValue = convertToArrayPayload(cloneObject(value1));
        const updatedFieldArrayValues = prependAt(control._getFieldArray(name), prependValue);
        control._names.focus = getFocusFieldName(name, 0, options);
        ids.current = prependAt(ids.current, prependValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, prependAt, {
            argA: fillEmptyArray(value1)
        });
    };
    const remove = (index)=>{
        const updatedFieldArrayValues = removeArrayAt(control._getFieldArray(name), index);
        ids.current = removeArrayAt(ids.current, index);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        !Array.isArray(get(control._fields, name)) && set(control._fields, name, undefined);
        control._setFieldArray(name, updatedFieldArrayValues, removeArrayAt, {
            argA: index
        });
    };
    const insert$1 = (index, value1, options)=>{
        const insertValue = convertToArrayPayload(cloneObject(value1));
        const updatedFieldArrayValues = insert(control._getFieldArray(name), index, insertValue);
        control._names.focus = getFocusFieldName(name, index, options);
        ids.current = insert(ids.current, index, insertValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, insert, {
            argA: index,
            argB: fillEmptyArray(value1)
        });
    };
    const swap = (indexA, indexB)=>{
        const updatedFieldArrayValues = control._getFieldArray(name);
        swapArrayAt(updatedFieldArrayValues, indexA, indexB);
        swapArrayAt(ids.current, indexA, indexB);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, swapArrayAt, {
            argA: indexA,
            argB: indexB
        }, false);
    };
    const move = (from, to)=>{
        const updatedFieldArrayValues = control._getFieldArray(name);
        moveArrayAt(updatedFieldArrayValues, from, to);
        moveArrayAt(ids.current, from, to);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, moveArrayAt, {
            argA: from,
            argB: to
        }, false);
    };
    const update = (index, value1)=>{
        const updateValue = cloneObject(value1);
        const updatedFieldArrayValues = updateAt(control._getFieldArray(name), index, updateValue);
        ids.current = [
            ...updatedFieldArrayValues
        ].map((item, i)=>!item || i === index ? generateId() : ids.current[i]);
        updateValues(updatedFieldArrayValues);
        setFields([
            ...updatedFieldArrayValues
        ]);
        control._setFieldArray(name, updatedFieldArrayValues, updateAt, {
            argA: index,
            argB: updateValue
        }, true, false);
    };
    const replace = (value1)=>{
        const updatedFieldArrayValues = convertToArrayPayload(cloneObject(value1));
        ids.current = updatedFieldArrayValues.map(generateId);
        updateValues([
            ...updatedFieldArrayValues
        ]);
        setFields([
            ...updatedFieldArrayValues
        ]);
        control._setFieldArray(name, [
            ...updatedFieldArrayValues
        ], (data)=>data, {}, true, false);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useFieldArray.useEffect": ()=>{
            control._state.action = false;
            isWatched(name, control._names) && control._subjects.state.next({
                ...control._formState
            });
            if (_actioned.current && (!getValidationModes(control._options.mode).isOnSubmit || control._formState.isSubmitted) && !getValidationModes(control._options.reValidateMode).isOnSubmit) {
                if (control._options.resolver) {
                    control._runSchema([
                        name
                    ]).then({
                        "useFieldArray.useEffect": (result)=>{
                            control._updateIsValidating([
                                name
                            ]);
                            const error = get(result.errors, name);
                            const existingError = get(control._formState.errors, name);
                            if (existingError ? !error && existingError.type || error && (existingError.type !== error.type || existingError.message !== error.message) : error && error.type) {
                                error ? set(control._formState.errors, name, error) : unset(control._formState.errors, name);
                                control._subjects.state.next({
                                    errors: control._formState.errors
                                });
                            }
                        }
                    }["useFieldArray.useEffect"]);
                } else {
                    const field = get(control._fields, name);
                    if (field && field._f && !(getValidationModes(control._options.reValidateMode).isOnSubmit && getValidationModes(control._options.mode).isOnSubmit)) {
                        validateField(field, control._names.disabled, control._formValues, control._options.criteriaMode === VALIDATION_MODE.all, control._options.shouldUseNativeValidation, true).then({
                            "useFieldArray.useEffect": (error)=>!isEmptyObject(error) && control._subjects.state.next({
                                    errors: updateFieldArrayRootError(control._formState.errors, error, name)
                                })
                        }["useFieldArray.useEffect"]);
                    }
                }
            }
            control._subjects.state.next({
                name,
                values: cloneObject(control._formValues)
            });
            control._names.focus && iterateFieldsByAction(control._fields, {
                "useFieldArray.useEffect": (ref, key)=>{
                    if (control._names.focus && key.startsWith(control._names.focus) && ref.focus) {
                        ref.focus();
                        return 1;
                    }
                    return;
                }
            }["useFieldArray.useEffect"]);
            control._names.focus = '';
            control._setValid();
            _actioned.current = false;
        }
    }["useFieldArray.useEffect"], [
        fields,
        name,
        control
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useFieldArray.useEffect": ()=>{
            !get(control._formValues, name) && control._setFieldArray(name);
            return ({
                "useFieldArray.useEffect": ()=>{
                    const updateMounted = {
                        "useFieldArray.useEffect.updateMounted": (name, value1)=>{
                            const field = get(control._fields, name);
                            if (field && field._f) {
                                field._f.mount = value1;
                            }
                        }
                    }["useFieldArray.useEffect.updateMounted"];
                    control._options.shouldUnregister || shouldUnregister ? control.unregister(name) : updateMounted(name, false);
                }
            })["useFieldArray.useEffect"];
        }
    }["useFieldArray.useEffect"], [
        name,
        control,
        keyName,
        shouldUnregister
    ]);
    return {
        swap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(swap, [
            updateValues,
            name,
            control
        ]),
        move: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(move, [
            updateValues,
            name,
            control
        ]),
        prepend: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(prepend, [
            updateValues,
            name,
            control
        ]),
        append: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(append, [
            updateValues,
            name,
            control
        ]),
        remove: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(remove, [
            updateValues,
            name,
            control
        ]),
        insert: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(insert$1, [
            updateValues,
            name,
            control
        ]),
        update: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(update, [
            updateValues,
            name,
            control
        ]),
        replace: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(replace, [
            updateValues,
            name,
            control
        ]),
        fields: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
            "useFieldArray.useMemo": ()=>fields.map({
                    "useFieldArray.useMemo": (field, index)=>({
                            ...field,
                            [keyName]: ids.current[index] || generateId()
                        })
                }["useFieldArray.useMemo"])
        }["useFieldArray.useMemo"], [
            fields,
            keyName
        ])
    };
}
/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <button>Submit</button>
 *     </form>
 *   );
 * }
 * ```
 */ function useForm(props = {}) {
    const _formControl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const _values = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const [formState, updateFormState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        isDirty: false,
        isValidating: false,
        isLoading: isFunction(props.defaultValues),
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        validatingFields: {},
        errors: props.errors || {},
        disabled: props.disabled || false,
        isReady: false,
        defaultValues: isFunction(props.defaultValues) ? undefined : props.defaultValues
    });
    if (!_formControl.current) {
        if (props.formControl) {
            _formControl.current = {
                ...props.formControl,
                formState
            };
            if (props.defaultValues && !isFunction(props.defaultValues)) {
                props.formControl.reset(props.defaultValues, props.resetOptions);
            }
        } else {
            const { formControl, ...rest } = createFormControl(props);
            _formControl.current = {
                ...rest,
                formState
            };
        }
    }
    const control = _formControl.current.control;
    control._options = props;
    useIsomorphicLayoutEffect({
        "useForm.useIsomorphicLayoutEffect": ()=>{
            const sub = control._subscribe({
                formState: control._proxyFormState,
                callback: {
                    "useForm.useIsomorphicLayoutEffect.sub": ()=>updateFormState({
                            ...control._formState
                        })
                }["useForm.useIsomorphicLayoutEffect.sub"],
                reRenderRoot: true
            });
            updateFormState({
                "useForm.useIsomorphicLayoutEffect": (data)=>({
                        ...data,
                        isReady: true
                    })
            }["useForm.useIsomorphicLayoutEffect"]);
            control._formState.isReady = true;
            return sub;
        }
    }["useForm.useIsomorphicLayoutEffect"], [
        control
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>control._disableForm(props.disabled)
    }["useForm.useEffect"], [
        control,
        props.disabled
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>{
            if (props.mode) {
                control._options.mode = props.mode;
            }
            if (props.reValidateMode) {
                control._options.reValidateMode = props.reValidateMode;
            }
        }
    }["useForm.useEffect"], [
        control,
        props.mode,
        props.reValidateMode
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>{
            if (props.errors) {
                control._setErrors(props.errors);
                control._focusError();
            }
        }
    }["useForm.useEffect"], [
        control,
        props.errors
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>{
            props.shouldUnregister && control._subjects.state.next({
                values: control._getWatch()
            });
        }
    }["useForm.useEffect"], [
        control,
        props.shouldUnregister
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>{
            if (control._proxyFormState.isDirty) {
                const isDirty = control._getDirty();
                if (isDirty !== formState.isDirty) {
                    control._subjects.state.next({
                        isDirty
                    });
                }
            }
        }
    }["useForm.useEffect"], [
        control,
        formState.isDirty
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>{
            var _a;
            if (props.values && !deepEqual(props.values, _values.current)) {
                control._reset(props.values, {
                    keepFieldsRef: true,
                    ...control._options.resetOptions
                });
                if (!((_a = control._options.resetOptions) === null || _a === void 0 ? void 0 : _a.keepIsValid)) {
                    control._setValid();
                }
                _values.current = props.values;
                updateFormState({
                    "useForm.useEffect": (state)=>({
                            ...state
                        })
                }["useForm.useEffect"]);
            } else {
                control._resetDefaultValues();
            }
        }
    }["useForm.useEffect"], [
        control,
        props.values
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>{
            if (!control._state.mount) {
                control._setValid();
                control._state.mount = true;
            }
            if (control._state.watch) {
                control._state.watch = false;
                control._subjects.state.next({
                    ...control._formState
                });
            }
            control._removeUnmounted();
        }
    }["useForm.useEffect"]);
    _formControl.current.formState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$bun$2f$next$40$16$2e$1$2e$6$2b$2af12471b7080f02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useForm.useMemo": ()=>getProxyFormState(formState, control)
    }["useForm.useMemo"], [
        control,
        formState
    ]);
    return _formControl.current;
}
/**
 * Watch component that subscribes to form field changes and re-renders when watched fields update.
 *
 * @param control - The form control object from useForm
 * @param name - Can be field name, array of field names, or undefined to watch the entire form
 * @param disabled - Disable subscription
 * @param exact - Whether to watch exact field names or not
 * @param defaultValue - The default value to use if the field is not yet set
 * @param compute - Function to compute derived values from watched fields
 * @param render - The function that receives watched values and returns ReactNode
 * @returns The result of calling render function with watched values
 *
 * @example
 * The `Watch` component only re-render when the values of `foo`, `bar`, and `baz.qux` change.
 * The types of `foo`, `bar`, and `baz.qux` are precisely inferred.
 *
 * ```tsx
 * const { control } = useForm();
 *
 * <Watch
 *   control={control}
 *   names={['foo', 'bar', 'baz.qux']}
 *   render={([foo, bar, baz_qux]) => <div>{foo}{bar}{baz_qux}</div>}
 * />
 * ```
 */ const Watch = (props)=>props.render(useWatch({
        name: props.names,
        ...props
    }));
;
 //# sourceMappingURL=index.esm.mjs.map
}),
]);

//# sourceMappingURL=74135_react-hook-form_dist_index_esm_mjs_0f4732d2._.js.map